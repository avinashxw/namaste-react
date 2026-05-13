import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
            <img src={LOGO_URL} alt="Swiggy" width="100px" />
        </div>
        <nav>
          <ul>
            <li>
              Restaurants
            </li>
            <li>
              Order Now!
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
