import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../global-context/GlobalContext";
import { Link, useParams } from "react-router-dom";
import Products from "../products/Products";

function ProductDetails() {
  const { id } = useParams();
  const { selectProduct, setSelectProduct, coffeeProducts, addToCart } =
    useContext(StoreContext);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (coffeeProducts > 0) {
      const product = coffeeProducts.find((p) => p.id === id);
      if (product) {
        setSelectProduct(product);
        setImage(product.images[0]);
      }
      setLoading(false);
    }
    if (selectProduct) {
      setImage(selectProduct.images[0]);
    } else if (!selectProduct) {
      setImage(null);
    }
  }, [id, coffeeProducts, setSelectProduct]);

  //   loading
  if (loading) {
    return <div>Loading...</div>;
  }
  // No product found
  if (!selectProduct) {
    return <div>No Product Selected</div>;
  }

  return (
    <div className="">
      <div className="px-4 md:px-20">
        <div className="main-wrapper mt-10">
          <div className="flex gap-2 md:gap-10 flex-wrap lg:flex-nowrap">
            <div className="left flex flex-row sm:flex-col gap-4 sm:gap-0">
              {selectProduct.images?.map((img, index) => (
                <div key={index}>
                  {" "}
                  <img
                    src={img}
                    alt="product-img"
                    onClick={() => setImage(img)}
                    className={`w-16 h-16  my-2 object-cover cursor-pointer rounded-md hover:scale-105 transition-all duration-200 ${image === img && "border border-gray-700"}`}
                  />
                </div>
              ))}
            </div>
            <div className="center mt-5 lg:w-[50%] ">
              <img
                src={image}
                alt="product-img"
                className=" h-[420px] w-full  object-cover cursor-pointer hover:scale-110 transition-all duration-300 rounded-md"
              />
            </div>
            <div className="right mt-5">
              <h1 className="text-3xl font-semibold text-gray-800">
                {selectProduct.description}
              </h1>
              <div className="mt-2">
                <del className="text-gray-500 text-2xl font-inter">
                  ${selectProduct.discountPrice}
                </del>
                <span className="text-3xl ml-2 text-[#563b2adb] font-semibold font-inter">
                  ${selectProduct.price}
                </span>
              </div>
              <div className="font-inter mt-1 text-md text-gray-600">
                <span>Brand:</span>{" "}
                <span className="font-semibold">{selectProduct.brand}</span>
              </div>
              <div className="font-inter mt-1 text-md text-gray-600">
                <span>Name:</span>{" "}
                <span className="font-semibold">{selectProduct.name}</span>
              </div>
              <div className="font-inter mt-1 text-md text-gray-600">
                <span>Category:</span>{" "}
                <span className="font-semibold">{selectProduct.category}</span>
              </div>
              <div className="font-inter mt-1 text-md text-gray-600">
                <span>Weight:</span>{" "}
                <span className="font-semibold">{selectProduct.weight}</span>
              </div>
              <div className="font-inter mt-1 text-md text-gray-600">
                <span>Stock:</span>{" "}
                <span className="font-semibold">{selectProduct.stock} Pcs</span>
              </div>
              <div className="font-inter mt-1 text-md text-gray-600">
                <span>Size:</span>{" "}
                <span className="font-semibold">{selectProduct.size}</span>
              </div>
              <div className="font-inter mt-1 text-md text-gray-600">
                <span>Strength:</span>{" "}
                <span className="font-semibold">{selectProduct.strength}</span>
              </div>
              <Link to={"/cart"} className="">
                <button
                  type="button"
                  className="bg-[#563B2A] w-full mt-5 py-2.5 rounded-3xl text-white font-inter text-xl hover:bg-[#563b2ae0] transition-all duration-300"
                >
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Products heading={"Smiler Products"} />
    </div>
  );
}

export default ProductDetails;
