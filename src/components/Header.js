import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";

const Header = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.cartData);
  //if you want the data of a specific reducer then in that
  //you need to mention that reducers name after state.
  //here we have used the state as name but we can use any name according to our wish
  console.log("Redux data in header component", result);
  return (
    <div className="header">
        
        <Link  to="/">
          <h1 className="header-back-button">E-Comm</h1>
        </Link>

        <div className="search-box">
          <input type="text" onChange={(event)=>dispatch(productSearch(event.target.value))} placeholder='Search Product' />
        </div>
      
      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img 
            src="https://png.pngtree.com/png-clipart/20190903/original/pngtree-shopping-cart-icon-png-image_4436010.jpg"
            alt="Cart"
            />
        </div>
      </Link>
    </div>
  );
};

export default Header;
