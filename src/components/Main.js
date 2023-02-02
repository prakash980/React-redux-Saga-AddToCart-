import { addToCart, removeFromCart, emptyCart } from "../redux/action";
import { productList } from "../redux/productAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log("Data in main component", data);
  // const product = {
  //   id: 1,
  //   name: "I phone",
  //   type: "Mobile",
  //   price: "60000",
  //   color: "white",
  // };

  useEffect(()=>{
    dispatch(productList())
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      
      <div className="product-container">
        {
          data.map((item)=><div key={item.id} className="product-item">
            <img src={item.photo} alt="SmartPhones" />
            <div className="item-name">Id : {item.id}</div>
            <div className="item-name">Name : {item.name}</div>
            <div className="item-name">Color : {item.color}</div>
            <div className="item-name">Brand : {item.brand}</div>
            <div className="item-name">Price : {item.price}</div>
            <div className="item-name">Category : {item.category}</div>

            <div>
        <button onClick={() => dispatch(addToCart(item))}>
          Add To Cart
        </button>
      </div>
      {/* dispatch ke andar ab hume jo bhi action call karna hai vo call karenge yaha pe we are using addToCart */}
      <div>
        <button onClick={() => dispatch(removeFromCart(item.id))}> Remove From Cart </button>
      </div>
          </div>)
        }
      </div>
    </div>
  );
}

export default Main;
