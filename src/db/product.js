import pool from "../../config/index.js";

const getAllProducts = async () => {
  const { rows: products } = await pool.query(`select * from product`);
  return products;
};
const getProductsBasedOnCategory = async (category_id) => {
  const { rows: products } = await pool.query(
    `select * from product where category_id=$1`,
    [category_id],
  );
  return products;
};

const createProduct = async ({ name, description, price, category_id }) => {
  const { rows: product } = await pool.query(
    `insert into product(name,description,price,category_id) values($1,$2,$3,$4)`,
    [name, description, price, category_id],
  );
  return product[0];
};
const getSpecificProduct = async (id) => {
  // const {rows:product}= await pool.query(`select product.product_id,product.name, product.price, color.color_code, url
  // from product inner join variant_product on product.product_id = variant_product.product_id inner join color  on variant_product.color_id = color.color_id inner join image on variant_product.variant_product_id = image.variant_product_id  where product.product_id = $1;`,[id])
  // return product
  const { rows: product } = await pool.query(
    `select name,price from product where product_id=$1`,
    [id],
  );
  const { rows: color } = await pool.query(
    `select variant_product_id,color_code from color inner join variant_product on color.color_id = variant_product.color_id where product_id=$1`,
    [id],
  );
  let variant = [];
  let images = [];
  let sizes = [];
  let colorCodeArray = [];
  for (let x of color) {
    variant.push(x.variant_product_id);
    colorCodeArray.push(x.color_code);
  }
  let count = 0;
  for (let x of variant) {
    let { rows: product } = await pool.query(
      `select image.url from image inner join variant_product on image.variant_product_id = variant_product.variant_product_id inner join color on color.color_id = variant_product.color_id where variant_product.variant_product_id=$1;`,
      [x],
    );
    let { rows:size}  = await pool.query(`select size_code from product_size inner join size on product_size.size_id = size.size_id where variant_product_id = $1`,[x]);
    let size_product_array = {[colorCodeArray[count]]:size}
    let obj = { [colorCodeArray[count]]: product };
    images.push(obj);
    sizes.push(size_product_array)
    count++;
  }
  return {
    product: product,
    color: color,
    image: images,
    size:sizes
  };
};
//delete Product
const delProduct = async (id) => {
  const { rows: product } = await pool.query(
    `delete from product where product_id=$1`,
    [id],
  );
  return product[0];
};
// upload img
const uploadImg = async ({ variant_product_id, url }) => {
  const new_arr = url.map((file) => `'${file}'`);
  const arr = `array[${new_arr}]`;
  let query = `insert into image(variant_product_id,url) values(${variant_product_id},unnest(${arr}))`;
  console.log(query);
  // const {rows:img}  = await pool.query(`insert into image(variant_product_id,url) values($1,unnest($2))`,[variant_product_id,arr])
  const { rows: img } = await pool.query(query);
  return img;
};

export {
  createProduct,
  getAllProducts,
  delProduct,
  getSpecificProduct,
  uploadImg,
  getProductsBasedOnCategory,
};
