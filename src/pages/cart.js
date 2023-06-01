import MyCart from "@/components/cart/MyCart";
import MyCartBanner from "@/components/cart/MyCartBanner";
import Head from "next/head";

const cart = () => {
    return (
        <div>
            <Head>
                <title>Cart</title>
            </Head>
            <MyCartBanner />
            <MyCart />
        </div>
    );
};

export default cart;