import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { product_action } from "../Redux/action";
import Card from "react-bootstrap/Card";
import { Skeleton } from "@mui/material";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./section.css"

import Navbar_1 from "./Navbar_1";

const AllProduct = () => {
  const dispatch = useDispatch();
  
  const [price, setPrice] = useState(1000)
  const [filtered, setFiltered] = useState([]);

  const product = useSelector((state) => state.product.data.data);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [product]);

  useEffect(() => {
    dispatch(product_action());
  }, [dispatch]);

  useEffect(() => {
    setFiltered(product);
  }, [product]);


  const handleRangeChange = (e) => {
    setPrice(e.target.value)
  };

  const handleFilter = () => {
    const filterPro = product.filter((el) => el.price <= price)
    setFiltered(filterPro)
  };

  useLayoutEffect(() => {
    const containers = document.querySelectorAll(".image-container");

    containers.forEach((container) => {
      const img = container.querySelector("img");

      if (img) {
        const handleMouseMove = (e) => {
          const { left, top, width, height } =
            container.getBoundingClientRect();
          const x = ((e.clientX - left) / width) * 100;
          const y = ((e.clientY - top) / height) * 100;

          img.style.transformOrigin = `${x}% ${y}%`;
          img.style.transform = "scale(3)";
        };

        const handleMouseLeave = () => {
          img.style.transform = "scale(1)";
          img.style.height = "100%";
          img.style.width = "100%";
          img.style.position = "absolute";
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);
      }
    });
  }, [product_action()]);

  const nav = useNavigate();
  const handleclick = (id) => {
    console.log(id);
    nav(`/single/${id}`);
  };

  return (
    <>
      <Navbar_1 />
      <div className="container">
        <div className="row  mt-2">
        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-9 m-3 ">
              <div className="row">
                <div className="col-xxl-11  cate shadow ">
                  <div className="cate-sub col-xxl-9 col-sm-7 col-12">
                    <div className="px-b bbb">
                      
                      <b>Category </b>
                    </div>
                    <div className="bo"></div>
                    <div className="dair ">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          Juice & Drinks
                        </label>
                      </div>
                      <span>[20]</span>
                    </div>

                    <div className="dair ">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          Dairy & Milk
                        </label>
                      </div>
                      <span>[54]</span>
                    </div>

                    <div className="dair ">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          Snack & Spice
                        </label>
                      </div>
                      <span>[64]</span>
                    </div>
                  </div>

                  <div className=" cate-sub col-xxl-9 col-sm-7 col-12">
                    <div className="px-b bbb">

                      <b>Price </b>
                    </div>
                    <div className="bo"></div>
                    <div className="dair">
                    <input
                      type="range"
                      min="0"
                      max="10000"
                      value={price}
                      onChange={handleRangeChange}
                    />
                  </div>

                  {/* Displaying selected price */}
                  <div className="d-flex">
                    <b>Price: </b> ${price}
                  </div>
            
                    <div>
                      <button
                      onClick={handleFilter}
                        className="btn"
                        style={{

                          background: "rgb(100 180 150 / 1)",
                          color: "white",
                        }}
                      >
                        Filter
                      </button>
                    </div>
                  </div>

                  <div className="cate-sub col-xxl-9 col-sm-9 col-12">
                    <div className="px-b bbb">
                      {" "}
                      <b>Colors </b>
                    </div>
                    <div className="bo"></div>
                    <div className="dair">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          Blue
                        </label>
                      </div>
                      <span className="btn btn-primary p-2"></span>
                    </div>

                    <div className="dair ">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          Yellow
                        </label>
                      </div>
                      <span className="btn btn-warning p-2"></span>
                    </div>
                    <div className="dair">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          Red
                        </label>
                      </div>
                      <span className="btn btn-danger p-2"></span>
                    </div>

                    <div className="dair">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          Green
                        </label>
                      </div>
                      <span className="btn btn-success p-2"></span>
                    </div>
                  </div>

                  <div className="cate-sub col-xxl-9">
                    <div className="px-b bbb">
                      {" "}
                      <b>Weight </b>
                    </div>
                    <div className="bo"></div>
                    <div className="dair">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          2kg Pack
                        </label>
                      </div>
                      {/* <span>[20]</span> */}
                    </div>

                    <div className="dair">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          20kg Pack
                        </label>
                      </div>
                    </div>

                    <div className="dair">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckIndeterminate"
                        />
                        <label
                          class="form-check-label"
                          for="flexCheckIndeterminate"
                          id="flex"
                        >
                          30kg Pack
                        </label>
                      </div>

                    </div>
                  </div>

                  <div className="cate-subb col-xxl-9">
                    <div className="px-b bbb">
                   
                      <b style={{margin:"0px 20px"}}>Tages </b>
                    </div>
                    <div className="bo"></div>

                    <div className="foo">Vegetables</div>
                    <div className="foo">Juice</div>

                    <div className="foo">Vegetables</div>

                    <div className="foo">Food</div>
                    <div className="foo">Dry Fruit</div>
                  </div>
                </div>
              </div>
            </div>

    
            <div className="col-xxl-8 col-xl-7 col-lg-7 aos-init aos-animate " data-aos="fade-up">
          <div className="card-content ">
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                <Card
                  key={index}
                  id="card-product"
                  style={{
                    marginBottom: "20px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  className="shadow"
                >
                  <div className="image-container">
                    <Skeleton
                      variant="rectangular"
                      height={200}
                      style={{
                        borderRadius: "10px",
                        marginBottom: "10px",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div id="shop">
                    <Skeleton variant="circular" width={30} height={30} />
                  </div>
                  <div id="product-icon" style={{ display: "flex", gap: "10px" }}>
                    <Skeleton variant="circular" width={25} height={25} />
                    <Skeleton variant="circular" width={25} height={25} />
                  </div>
                  <Card.Body id="card-body-1">
                    <Skeleton
                      variant="text"
                      width="60%"
                      height={20}
                      style={{ marginBottom: "5px" }}
                    />
                    <Skeleton
                      variant="text"
                      width="80%"
                      height={20}
                      style={{ marginBottom: "5px" }}
                    />
                    <Skeleton variant="text" width="40%" height={20} />
                  </Card.Body>
                </Card>
              ))
              : filtered.map((el, index) => (
                <Card
                  id="card-product"
                  key={index}
                  onClick={() => handleclick(el._id)}
                  style={{
                    marginBottom: "20px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="image-container">
                    <Card.Img
                      variant="top"
                      alt="image"
                      src={el.image}
                      className="zoom-image"
                    />
                  </div>
                  <div id="shop">
                    <i className="fa-solid fa-bag-shopping"></i>
                  </div>
                  <div id="product-icon">
                    <i className="fa-regular fa-eye p-3" id="product-icon-1"></i>
                    <i className="fa-regular fa-heart p-3" id="product-icon-1"></i>
                  </div>
                  <Card.Body id="card-body-1">
                    <Card.Title
                      style={{
                        fontSize: "15px",
                        color: "rgb(119 119 119 / 1)",
                      }}
                    >
                      {el.category || "Card Title"}
                    </Card.Title>
                    <Card.Text>
                      <i
                        className="fa-regular fa-star"
                        style={{ color: "orange" }}
                      ></i>{" "}
                      <i
                        className="fa-regular fa-star"
                        style={{ color: "orange" }}
                      ></i>{" "}
                      <i
                        className="fa-regular fa-star"
                        style={{ color: "orange" }}
                      ></i>
                      <i
                        className="fa-regular fa-star"
                        style={{ color: "orange" }}
                      ></i>
                      <i
                        className="fa-regular fa-star"
                        style={{ color: "orange" }}
                      ></i>
                    </Card.Text>
                    <Card.Text>
                      {el.description || "Description goes here."}
                    </Card.Text>
                    <Card.Text
                      style={{
                        padding: "10px",
                        color: "rgb(100 180 150 / 1)",
                        fontWeight: "800",
                      }}
                    >
                      ${el.price}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
          </div>
        </div>

            </div>
          </div>
    
    

      
    
      
    </>
  )
}

export default AllProduct


