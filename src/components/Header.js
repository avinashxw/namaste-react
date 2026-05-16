import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
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
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to="/restaurants">Restaurants</Link>
            </li>
            <li>
              <Link to="/order">Order Now!</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
