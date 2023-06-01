import ProductDescription from "@/components/productDetail/ProductDescription";
import ProductDetailBanner from "@/components/productDetail/ProductDetailBanner";
import ProductReviews from "@/components/productDetail/ProductReviews";
import RelatedProduct from "@/components/productDetail/RelatedProduct";
import productData from "@/data/product/productData";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductDetail = ({ singleProduct }) => {
  // const [data, setData] = useState([]);

  // console.log("ALL DATA", productData);

  // const singleProductData = productData.find(
  //   (product) => product.id === Number(router.query.shopId)
  // );

  // console.log("SINGLE PRODUCT DATA", singleProductData);

  const relatedProducts = productData.filter(
    (product) => product.category === singleProduct.category
  );

  // useEffect(() => {
  //   setData(singleProductData);
  // }, [singleProductData]);

  return (
    <div>
      <Head>
        <title> Product Detail</title>
      </Head>
      <div>
        <ProductDetailBanner />
        <ProductDescription data={singleProduct} />
        <ProductReviews data={singleProduct} />
        <RelatedProduct data={relatedProducts} />

      </div>
    </div>
  );
};

export default ProductDetail;

// export const getStaticProps = async ({params}) => {
//   const data = productData.find(({id}) => id === params.shopId);

//   return{
//     props: {
//       singleProduct: data
//     }
//   }
// }

// export const getStaticPaths = async () => {
//   const paths = productData.map((item) => {
//     return {
//       params: {
//         shopId: item.id
//       }
//     }
//   })

//   return {paths, fallback: false}
// }

export async function getServerSideProps({ params }) {
  const data = productData.find(({ id }) => id === params.shopId);
  return { 
    props: { 
      singleProduct: data 
    } 
  };
}
