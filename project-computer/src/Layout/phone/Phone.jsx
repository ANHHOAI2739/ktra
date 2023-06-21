import React, { useState } from "react";
import Cardproduct from "../Cardproduct";
import "./phone.css";
import Priceslider from "./Priceslider";
import Check from "./Check";

const Phone = ({ name, price }) => {
  const [listProduct, setListProduct] = useState([]);
  const [page, setPage] = useState(1);

  // fetch("https://6485ce2fa795d24810b7565b.mockapi.io/api/v1/blog")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     setListProduct(data);
  //   });

  const handleSelectPage = (pg) => {
    console.log(pg);
    setPage(pg);
  };

  return (
    <div>
      <section class="section-pagetop bg">
        <div class="container">
          <h2 class="title-page">Điện thoại</h2>
        </div>
      </section>

      <section class="section-content padding-y">
        <div class="container">
          <div class="row">
            <aside class="col-md-3">
              <div class="card">
                <article class="filter-group">
                  <header class="card-header">
                    <h6 class="title">Price range </h6>
                  </header>
                  <div class="filter-content collapse show" id="collapse_3">
                    <div class="card-body">
                      <Priceslider />

                      <button class="btn btn-block btn-primary">Apply</button>
                    </div>
                  </div>
                </article>
                <article class="filter-group">
                  <header class="card-header">
                    <h6 class="title">Hãng</h6>
                  </header>
                  <div class="filter-content collapse show" id="collapse_1">
                    <div class="card-body">
                      <Check />
                    </div>
                  </div>
                </article>
              </div>
            </aside>
            <main class="col-md-9">
              <header class="border-bottom mb-4 pb-3">
                <div class="form-inline">
                  <select class="mr-2 form-control" style={{ width: "10%" }}>
                    <option>Mới nhất</option>
                    <option>Cũ nhất</option>
                    <option>Giá tăng dần</option>
                    <option>Giá giảm dần</option>
                  </select>
                </div>
              </header>
              <div className="container px-4 px-lg-5 mt-5">
                <div
                  className="row gx-3 gx-lg-3 row-cols-2 row-cols-md-3 row-cols-xl-4 "
                  style={{ width: "109%" }}
                >
                  {listProduct.map((product) => (
                    <Cardproduct
                    // key={product.id}
                    // name={product.name}
                    // price={product.price}
                    />
                  ))}
                </div>
              </div>

              <nav
                class="mt-4"
                aria-label="Page navigation sample"
                className="mt-4"
              >
                <ul class="pagination">
                  <li class="page-item disabled">
                    <a class="page-link" href="/#">
                      Previous
                    </a>
                  </li>
                  {[1, 2, 3].map((page) => (
                    <li
                      class="page-item "
                      onClick={() => handleSelectPage(page)}
                    >
                      <a class="page-link" href="/#">
                        {page}
                      </a>
                    </li>
                  ))}
                  <li class="page-item">
                    <a class="page-link" href="/#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Phone;
