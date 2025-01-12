import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, single_action } from "../Redux/action";
import { useParams } from "react-router-dom";
import "./single.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from "react-bootstrap/Card";

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Form from "react-bootstrap/Form";
import Navbar_1 from "./Navbar_1";



export default function Singlepage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [price, setprice] = useState([1000]);

  const productData = useSelector((state) => state.single.data)
  const product = productData ? productData.data : null

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {product.price}
    </Tooltip>
  );

  const handleCart = (product) => {
    console.log(product);
    dispatch(addToCart(product, id));
  };

  useLayoutEffect(() => {
    const containers = document.querySelectorAll(".image-container");
    containers.forEach((container) => {
      const img = container.querySelector("img");

      if (img) {
        const handleMouseMove = (e) => {
          const { left, top, width, height } = container.getBoundingClientRect();
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
  }, [product, id]);
  useEffect(() => {
    dispatch(single_action(id));
    // dispatch(wholedata());
  }, [product]);


  return (
    <>
      <Navbar_1 />
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          backgroundColor: "rgb(228 242 237 / 1)",
          padding: "25px",
        }}
      >
        <div
          className="col-xl-2 text-center"
          style={{ fontWeight: "700", fontSize: "20px" }}
        >
          Singlepage
        </div>
        <div className="col-xl-5 text-center">Home - Product - Singlepage</div>
      </div>

      <div className="container mt-2">
        <div className="row ">
          <div className="row justify-content-around">
            <div className="col-xxl-3 col-lg-4 col-md-9 m-3 ">
              <div className="row">
                <div className="col-xxl-11  cate shadow ">
                  <div className="cate-sub col-xxl-9 col-sm-12 col-12">
                    <div className="px-b bbb">
                      {" "}
                      <b>Category </b>
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
                          Juice & Drinks
                        </label>
                      </div>
                      <span>[20]</span>
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
                          Dairy & Milk
                        </label>
                      </div>
                      <span>[54]</span>
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
                          Snack & Spice
                        </label>
                      </div>
                      <span>[64]</span>
                    </div>
                  </div>

                  <div className="cate-sub col-xxl-9 col-sm-12">
                    <div className="px-b bbb">

                      <b>Price </b>
                    </div>
                    <div className="bo"></div>
                    <div className="dair">
                      <Form.Range />
                    </div>
                    <div className="d-flex">
                      <b> Price </b> : ${price[0]}
                    </div>
                    <div>
                      <button
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

                  <div className="cate-sub col-xxl-9">
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
                      {" "}
                      <b>Tages </b>
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
            <div className="col-xxl-8 col-xl-6  col-lg-7">
              {product ? (
                <div className="col-xxl-12 shadow">
                  {

                    <div class="card mb-3" style={{ maxWidth: "100%" }}>
                      <div class="row g-0" id="ro">
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <div className="image-container" style={{ height: "75vh" }}>
                            <Card.Img
                              variant="top"
                              alt="image"
                              src={product.image}
                              className="zoom-image"
                              style={{ objectFit: "cover" }}

                            />
                          </div>

                        </div>
                        <div class="col-md-7">
                          <div class="card-body" style={{ alignItems: "start" }}>
                            <h5 class="card-title">Seeds Of Change Oraganic Quinoa, Brown</h5>
                            <p class="card-text" style={{ color: "rgb(122 122 122 / 1)", textAlign: "start" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure minus error doloribus saepe natus?</p>
                            <p><i class="fa-solid fa-star" style={{ color: "#e67a00" }}></i><i class="fa-solid fa-star" style={{ color: "#e67a00" }}></i><i class="fa-solid fa-star" style={{ color: "#e67a00" }}></i><i class="fa-solid fa-star" style={{ color: "#e67a00" }}></i><i class="fa-solid fa-star" style={{ color: "#e67a00" }}></i><span style={{ color: "rgb(122 122 122 / 1)" }}>( 75 Reviews )</span></p>
                            <p>Brand : <span style={{ color: "rgb(122 122 122 / 1)" }}>{product.name}</span></p>
                            <p>description : <span style={{ color: "rgb(122 122 122 / 1)" }}>{product.description}</span></p>
                            <p>Diet Type : <span style={{ color: "rgb(122 122 122 / 1)" }}>Vegetarian</span></p>
                            <p>Weight : <span style={{ color: "rgb(122 122 122 / 1)" }}>200 Grams</span></p>
                            <p>Speciality : <span style={{ color: "rgb(122 122 122 / 1)" }}>Gluten Free, Sugar Free</span></p>
                            <p>Info : <span style={{ color: "rgb(122 122 122 / 1)" }}>Egg Free, Allergen-Free</span></p>
                            <p>Items : <span style={{ color: "rgb(122 122 122 / 1)" }}>1</span></p>
                            <h2 style={{ color: "rgb(100 180 150 / 1)" }}>${product.price}</h2>
                            <p className="foooo">Size / Weight : <div className="fooo">50kg </div>  <div className="fooo">80kg </div>  <div className="fooo">120kg </div>  <div className="fooo">200kg </div> </p>
                            <OverlayTrigger
                              placement="top"
                              delay={{ show: 200, hide: 200 }}
                              overlay={renderTooltip}
                            >
                              <Button style={{ background: "rgb(100, 180, 150)", border: "none" }} onClick={() => handleCart(product)}>Add To Cart</Button>
                            </OverlayTrigger>
                          </div>


                        </div>

                      </div>
                    </div>

                  }
                </div>

              ) : (
                <div>Loading...</div>
              )}
              <div className="col-xxl-9">
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                    sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit
                    dignissimos consectetur quae in perferendis          
                  </Tab>
                  <Tab eventKey="profile" title="information">
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero sapiente doloribus debitis corporis, eaque dicta, repellat amet, illum adipisci vel perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quis.</p> */}
                    <div>
                    {product ? (
                <div className="col-xxl-12 ">
                  {

                    <div class="card mb-3" style={{ maxWidth: "100%" }}>
                      <div class="row g-0">
                       
                        <div class="col-md-7">
                          <div class="card-body" style={{ alignItems: "start" }}>
                            {/* <h5 class="card-title">Seeds Of Change Oraganic Quinoa, Brown</h5> */}
                            <p class="card-text" style={{ color: "rgb(122 122 122 / 1)", textAlign: "start" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure minus error doloribus saepe natus?</p>
                            {/* <p><i class="fa-solid fa-star" style={{ color: "#e67a00" }}></i><i class="fa-solid fa-star" style={{ color: "#e67a00" }}></i><i class="fa-solid fa-star" style={{ color: "#e67a00" }}></i><i class="fa-solid fa-star" style={{ color: "#e67a00" }}></i><i class="fa-solid fa-star" style={{ color: "#e67a00" }}></i><span style={{ color: "rgb(122 122 122 / 1)" }}>( 75 Reviews )</span></p> */}
                            <p>Brand : <span style={{ color: "rgb(122 122 122 / 1)" }}>{product.name}</span></p>
                            <p>description : <span style={{ color: "rgb(122 122 122 / 1)" }}>{product.description}</span></p>
                            <p>Diet Type : <span style={{ color: "rgb(122 122 122 / 1)" }}>Vegetarian</span></p>
                            <p>Weight : <span style={{ color: "rgb(122 122 122 / 1)" }}>200 Grams</span></p>
                            <p>Speciality : <span style={{ color: "rgb(122 122 122 / 1)" }}>Gluten Free, Sugar Free</span></p>
                            <p>Info : <span style={{ color: "rgb(122 122 122 / 1)" }}>Egg Free, Allergen-Free</span></p>
                            <p>Items : <span style={{ color: "rgb(122 122 122 / 1)" }}>1</span></p>
                        
                          </div>


                        </div>

                      </div>
                    </div>

                  }
                </div>

              ) : (
                <div>Loading...</div>
              )}
                    </div>
                  </Tab>
                  <Tab eventKey="contact" title="Contact">
                    Contact Me !
                  </Tab>
                </Tabs>
              </div>
            </div>


          </div>


        </div>
      </div >
    </>
  )
}

