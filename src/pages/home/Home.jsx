import React from "react";
import Banner from "../../components/banner/Banner";
import OurHistory from "../../components/our-history/OurHistory";
import Products from "../../components/products/Products";
import Customers from "../../components/customers/Customers";

function Home() {
  return (
    <div className="">
      <Banner />
      <OurHistory />
      <Products heading={"Popular Products"} />
      <Customers />
    </div>
  );
}

export default Home;
