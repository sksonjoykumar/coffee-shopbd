import React, { useContext } from "react";
import { StoreContext } from "../../global-context/GlobalContext";
import { FaMinus, FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { MdClose } from "react-icons/md";

function Cart() {
  const { cartItems, setCartItems } = useContext(StoreContext);


  // increaseQuantity function
  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    toast.success(`quantity increase!`);
  };

  // decreaseQuantity function
  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    toast.error(`quantity decrease!`);
  };

  // removeItems function
  const removeItems = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
  return (
    <div className="px-4 md:px-20">
      <div className="font-outfit">
        <div className="text-center grid justify-center items-center grid-cols-4  md:grid-cols-6 gap-2 text-base md:text-lg border-b pb-1 text-[#1D2A35] sticky top-6 h-10 bg-white overflow-hidden">
          <p>Items</p>
          <p>Title</p>
          <p className="hidden md:block">Price</p>
          <p className="hidden md:block">Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {cartItems.map((item, index) => (
          <div
            key={index}
            className="text-center grid justify-center items-center grid-cols-4  md:grid-cols-6 gap-2 border-b pb-2 mt-4 md:text-base text-sm"
          >
            <img
              src={item.images[0]}
              alt="product-img"
              className="w-20 h-14 object-cover border border-gray-300 rounded-sm mx-auto hover:scale-105 transition-all duration-500 cursor-pointer"
            />
            <p className="text-base text-gray-700 ">{item.name}</p>
            <p className="text-base text-gray-700 font-semibold hidden md:block">
              ${item.price}
            </p>
            <div className="hidden md:flex  justify-center items-center gap-2.5">
              <button
                type="button"
                className="border rounded-full p-1.5"
                onClick={() => decreaseQuantity(item.id)}
              >
                <FaMinus color="#E02335" size={15} />
              </button>
              <p>{item.quantity}</p>
              <button
                type="button"
                className="border rounded-full p-1.5"
                onClick={() => increaseQuantity(item.id)}
              >
                <FaPlus color="#49E227" size={15} />
              </button>
            </div>
            <p className="text-base text-gray-700 font-semibold">
              ${item.price * item.quantity.toFixed(2)}
            </p>
            <button
              type="button"
              className="flex justify-center"
              onClick={() => removeItems(item.id)}
            >
              <MdClose
                size={20}
                className="hover:text-[#E02335] transition-all duration-200"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
