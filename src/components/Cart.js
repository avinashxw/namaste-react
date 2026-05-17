import { useDispatch, useSelector } from "react-redux";
import FamousFor from "./FamousFor";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <>
            <div className="text-center">
                <p className="text-4xl font-extrabold text-red-200 uppercase">Cart</p>
                <div>
                    <FamousFor places={cartItems} />
                </div>
                {
                    cartItems.length !==0 ? (
                        <div>
                            <button onClick={handleClearCart} className="p-2 m-2 bg-black text-white rounded-2xl">Clear Cart</button>
                        </div>
                    ) : ""
                }
                
            </div>
        </>
    )
};

export default Cart;