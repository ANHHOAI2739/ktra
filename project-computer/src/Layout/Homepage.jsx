import React, { useState } from "react";
import Cardproduct from "./Cardproduct";
import Productcarousel from "../Layout/Productcarousel";
import Productvid from "../Layout/Productvid";

const Homepage = () => {
  const [listProduct, setListProduct] = useState([]);

  fetch("https://6485ce2fa795d24810b7565b.mockapi.io/api/v1/blog")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setListProduct(data);
    });

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "70%",
          margin: "auto",
        }}
      >
        <Productcarousel />
        <Productvid />
      </div>

      <section className="py-5" style={{ marginRight: "8%" }}>
        <div className="container px-4 px-lg-5 mt-5">
          <div
            className="row gx-2 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
            style={{ width: "113%", margin: "auto" }}
          >
            {listProduct.map((product) => (
              <Cardproduct
                key={product.id}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
