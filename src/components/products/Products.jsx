import React, { useContext } from "react";
import { StoreContext } from "../../global-context/GlobalContext";
import { Link } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";

function Products({ heading }) {
  const {
    coffeeProducts,
    cartItems,
    setCartItems,
    addToCart,
    isInCart,
    removeFromCart,
    handleClickProduct,
  } = useContext(StoreContext);

  return (
    <div className="px-4 md:px-20">
      <div className="main mt-12">
        <div className="title mb-7">
          <h1 className="text-3xl font-inter font-semibold">{heading}</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {coffeeProducts.map((item, index) => (
            <div
              key={index}
              className="card border p-4 rounded-md shadow-sm hover:border hover:border-[#563B2A] transition-all duration-300 min-h-80"
            >
              <Link
                to={`/productdetails/${item.id}`}
                onClick={() => handleClickProduct(item.id)}
              >
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-36 rounded-md hover:scale-105 transition-all duration-200 object-cover"
                />
              </Link>
              <Link
                to={`/productdetails/${item.id}`}
                onClick={() => handleClickProduct(item.id)}
              >
                <p className="text-sm mt-1 font-inter text-gray-500">
                  {item?.name}
                </p>
                <h2 className="text-md leading-tight font-semibold text-gray-800 mt-1">
                  {item?.description.slice(0, 60)}
                </h2>
                <div className="flex my-1.5">
                  <IoIosStarOutline size={16} color="grey" />
                  <IoIosStarOutline size={16} color="grey" />
                  <IoIosStarOutline size={16} color="grey" />
                  <IoIosStarOutline size={16} color="grey" />
                  <IoIosStarOutline size={16} color="grey" />
                </div>
                <div className="mt-2">
                  <del className="font-inter text-gray-500 text-md">
                    ${item?.discountPrice}
                  </del>
                  <span className="ml-2 text-xl text-gray-700 font-semibold">
                    ${item?.price}
                  </span>
                </div>
              </Link>

              <div className="text-center pt-10">
                <button
                  type="button"
                  className="hover:bg-[#563B2A] py-2 text-black hover:text-white text-lg border border-[#563B2A] rounded-3xl w-full transition-all duration-300"
                  onClick={() =>
                    isInCart(item.id)
                      ? removeFromCart(item.id)
                      : addToCart(item)
                  }
                >
                  {isInCart(item.id) ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
