import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const { loggedInUser } = useContext(UserContext);

  // subscring to the store using the selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems: ",cartItems)

  return (
    <>
      <header>
        <div className="logo">
            <Link to="/">
            <img src={LOGO_URL} alt="Swiggy" className="w-56" />
            </Link>
        </div>
        <nav>
          <ul>
            <li>
              Welcome, {loggedInUser}
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to="/restaurants">Restaurants</Link>
            </li>
            <li>
              <Link to="/order">Order Now!</Link>
            </li>
            <li>
              <Link to="/cart" className="font-bold text-xl">Cart ({cartItems?.length || 0} items)</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
