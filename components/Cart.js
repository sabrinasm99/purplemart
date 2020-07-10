import React from "react";
import { useSelector } from "react-redux";
import { addProduct, deleteProduct } from "./actions/cartAction";
import { ToastContainer, toast, Zoom } from 'react-toastify';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const notify = () => toast('Hello Everyone');
  const onClickAdd = (id) => {
    if (auth.isAuthenticated) {
      addProduct(id);
    }
  };
  const onClickLess = (id) => {
    if (auth.isAuthenticated) {
      deleteProduct(id);
    }
  };
  let cartList = null;
  let totalPrice = 0;
  if (cart.list.length > 0) {
    cartList = cart.list.map((val) => {
      return (
        <div key={val._id} className="flex text-center bg-white p-1">
          <h5 className="w-1/4">{val.name}</h5>
          <h5 className="w-1/4">Rp{val.price.toLocaleString("id-ID")}</h5>
          <h5 className="w-1/4">
            <button className="px-1 border text-sm sm:text-base focus:outline-none"
            onClick={() => onClickLess(val._id)}>-</button>{" "}
            {val.quantity}{" "}
            <button
              className="px-1 border text-sm sm:text-base focus:outline-none"
              onClick={() => onClickAdd(val._id)}
            >
              +
            </button>
          </h5>
          <h5 className="w-1/4">Rp{val.total.toLocaleString("id-ID")}</h5>
        </div>
      );
    });
    for (let i = 0; i < cart.list.length; i++) {
      totalPrice += cart.list[i].total;
    }
  }
  return (
    <div className="px-2 pt-3 sm:px-0 sm:w-4/5 mx-auto mt-px62 sm:pt-5 text-sm sm:text-base">
      <div className="bg-white rounded-md text-center">
        <div className="flex bg-purple-800 rounded-t-md text-white p-1">
          <div className="w-1/4">Product Name</div>
          <div className="w-1/4">Price</div>
          <div className="w-1/4">Quantity</div>
          <div className="w-1/4">Total</div>
        </div>
        {cartList}
        <div className="flex">
          <div className="w-1/2">Total Price</div>
          <div className="w-1/2 font-bold">
            Rp{totalPrice.toLocaleString("id-ID")}
          </div>
        </div>
      </div>
      <button className="border border-purple-800 bg-purple-800 p-1 mt-5 text-white focus:outline-none"
      onClick={notify}>
        Order Now
      </button>
      <ToastContainer position='bottom-center' transition={Zoom} limit={1} />
    </div>
  );
}

export default Cart;
