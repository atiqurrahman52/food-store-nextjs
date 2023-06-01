import ShopBanner from "@/components/shop/ShopBanner";
import ShopProduct from "@/components/shop/ShopProduct";
import Head from "next/head";


const index = () => {
    return (
        <div>
            <Head>
                <title>Shop</title>
            </Head>
            <ShopBanner />
            <ShopProduct />
        </div>
    );
};

export default index;