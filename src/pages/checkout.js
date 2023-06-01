import BannerCheckout from "@/components/checkout/BannerCheckout";
import CheckoutDetails from "@/components/checkout/CheckoutDetails";
import Head from "next/head";


const checkout = () => {
    return (
        <div>
            <Head>
                <title>Checkout</title>
            </Head>
            <BannerCheckout />
            <CheckoutDetails />
        </div>
    );
};

export default checkout;