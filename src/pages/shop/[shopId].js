import ProductDescription from "@/components/productDetail/ProductDescription";
import ProductDetailBanner from "@/components/productDetail/ProductDetailBanner";
import productData from "@/data/product/productData";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductDetail = () => {
  const [data , setData] = useState([]);
  const router = useRouter();


  // const singleProductData = productData[router.id];
  //   console.log("SINGLE PRODUCT DATA", singleProductData);

  //   const relatedProducts = productData.filter(
  //     (product) => product.category === singleProductData.category
  //   );

  //   useEffect(() => {
  //     setData(singleProductData);
  //   }, [singleProductData]);
  
  return (
    <div>
      <Head>
        <title> Product Detail</title>
      </Head>
      <div>
         <ProductDetailBanner />
         {/* <ProductDescription /> */}
      </div>
    </div>
  );
};

export default ProductDetail;
