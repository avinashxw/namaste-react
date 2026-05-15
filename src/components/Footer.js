import { LOGO_URL } from "../utils/constants";
import { delhiDistricts } from "../utils/mockData";
import { Link } from "react-router-dom";

const Footer = () => {
  
  return (
    <>
      <footer>
        <nav>
          <ul>
            {
              delhiDistricts.map((item)=>(
                <Link key={"locale"+item.id} to={"location/"+item.id}>
                  <li key={item.id}>{item.name}</li>
                </Link>
              ))
            }
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
