





import React from "react";

import {useCart} from "react-use-cart";
import Product from "./Product";






function Cart() {
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <h3 style={{color:'brown', textAlign:"center", margin:"4%"}}> Hmm! Make an order or more and com back to us</h3>;

  return (
    <>

      <div>
        {items.map((item) => (
          <div key={item.id}  style={{backgroundColor:"purple", textAlign:"center", display:"inline-block", borderRadius:"20px", margin:"1%", height:"300px", width:"300px", color:"white"}}>
            <h1>  {item.quantity}  {item.name}</h1> <br/>






              <h4>
                {item.description}
              </h4>







<div style={{display:"block"}}>


<button style={{width:"50%", backgroundColor:"yellow"}}
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
            Less (-1)
            </button>






            <button style={{width:"50%", backgroundColor:"yellow"}}
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
        more (+1)
            </button><br/>


</div>









            <button onClick={() => removeItem(item.id)} style={{width:"70%", backgroundColor:"red", marginTop:"10%"}}  >&times; Delet</button><br/>
          </div>
        ))}
      </div>
    </>
  );
}



export default Cart