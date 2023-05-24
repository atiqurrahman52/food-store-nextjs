import MyCart from "@/components/cart/MyCart";
import MyCartBanner from "@/components/cart/MyCartBanner";

const cart = () => {
    return (
        <div>
            <MyCartBanner />
            <MyCart />
        </div>
    );
};

export default cart;