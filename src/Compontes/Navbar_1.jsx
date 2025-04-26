import { useEffect, useLayoutEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchCartData, remove_action } from "../Redux/action";
import Card from "react-bootstrap/Card";


function Navbar_1() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [quantities, setQuantities] = useState({});

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const nav = useNavigate();

  const cartData = useSelector((state) => state.All.data);
  const d = useSelector((state) => state.cart.data);
  const remove_card = useSelector((state) => state.remove_items.data);
  useLayoutEffect(() => {
    dispatch(fetchCartData())

  }, [d])
  useEffect(() => {
    if (remove_card && remove_card.length > 0) {
      dispatch(fetchCartData());
    }
  }, [dispatch, remove_card])

  const handlecloseItems = (id) => {

    dispatch(remove_action(id))



  }

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
  }, []);

  const handleQuantityChange = (id, change) => {
    setQuantities((prevQuantities) => {
      const newQuantity = (prevQuantities[id] || 1) + change;
      return {
        ...prevQuantities,
        [id]: newQuantity > 0 ? newQuantity : 1,
      };
    });
  };

  const calculateTotal = () => {
    if (Array.isArray(cartData) && cartData.length > 0) {
      return cartData.reduce((total, item) => {
        const quantity = quantities[item._id] || 1;
        return total + (item.price * quantity);
      }, 0);
    }
    return 0;
  }



  const checkout = () => {
    nav("/");
    handleClose()
  }
  const [add, setAdd] = useState(false);
  const admin = localStorage.getItem("UserRole");

  useEffect(() => {
    if (admin === "admin") {
      setAdd(true);
    } else {
      setAdd(false);
    }
  }, [admin]);

  const n = useNavigate()
  const handleLog = () => {

    n("/login")
    localStorage.removeItem("Token")
    localStorage.removeItem("UserId")
    localStorage.removeItem("UserRole")
    localStorage.removeItem("login")
  }

  return (
    <div className="container">
      <Navbar expand="lg" className="flex-wrap">
        <div id="con">
          <Navbar.Brand as={Link} to={"/"}>
            <img
              src="/image/logo.png"
              className="img-fluid rounded-top"
              alt="Logo"
            />
          </Navbar.Brand>

          <div className="col-12 col-lg-4 col-md-7 col-sm-12 d-flex align-items-center">
            <input
              type="search"
              placeholder="Search for items..."
              id="search"
            />
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{ background: "transparent", color: "black" }}
              >
                All Categories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Men</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Women</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Electronics</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="col-2 col-sm-2 glass fs-light">
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
          </div>

          <div className="col-12 col-lg-3 d-flex justify-content-around align-items-center">
            <div className="d-flex align-items-center">
              <i
                className="ri-user-line"
                style={{ fontSize: "20px", margin: "0px 5px" }}
              ></i>
              <div>
                <div className="paste-buttonn">
                  <button className="btn" style={{ fontWeight: 500 }}>
                    Account
                  </button>
                  <div className="dropdown-content">
                    <Link id="top" to={"/signup"}>Register</Link>
                    <Link id="middle" to={"/"}>Checkout</Link>
                    <Link id="bottom" to={"/login"}>Login</Link>
                    {
                      add == true ? <Link id="bottom" to={"/add"}>admin</Link> : ""
                    }


                    <div className="d-flex">
                      <button className="btn ms-1" style={{ fontSize: "14px", fontWeight: 600, border: "none" }} type="submit" onClick={handleLog}> Logout</button>
                    </div>


                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <i
                className="ri-heart-line"
                style={{ color: "black", margin: "0px 5px", fontSize: "20px" }}
              ></i>
              <div>Wishlist</div>
            </div>

            <div className="d-flex align-items-center">
              <div onClick={handleShow} className="d-flex  align-items-center me-2 btn" style={{ background: "transparent", color: "black", border: "none" }}>
                <i className="ri-shopping-cart-line" style={{ color: "black", margin: "0px 5px", fontSize: "20px" }}></i>
                <div>

                  Cart
                </div>

              </div>
              <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title className="fw-bold fs-4">Shopping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {cartData.length > 0 ? (
                    cartData.map((item) => (
                      <div key={item._id} className="cart-item d-flex align-items-center mb-4 p-3 border rounded shadow-sm">
                        <div className="cart-item-image col-3 d-flex justify-content-center">
                          <div className="image-container d-flex justify-content-center align-items-center" style={{ height: "100px" }}>
                            <Card.Img
                              variant="top"
                              alt="image"
                              src={item.image}
                              className="zoom-image"
                              style={{ objectFit: "contain", maxHeight: "100%" }}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-column ms-3 col-6">
                          <div className="cart-item-details">
                            <h5 className="cart-item-name mb-1 fw-semibold">{item.name}</h5>
                            <div className="cart-item-price text-muted">${item.price} x {quantities[item._id] || 1} Kg</div>
                          </div>

                          <div className="cart-item-quantity d-flex align-items-center mt-2">
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              onClick={() => handleQuantityChange(item._id, -1)}
                              className="me-2"
                            >
                              -
                            </Button>
                            <span className="cart-item-quantity-value px-3 py-1 border rounded bg-light">{quantities[item._id] || 1}</span>
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              onClick={() => handleQuantityChange(item._id, 1)}
                              className="ms-2"
                            >
                              +
                            </Button>
                          </div>
                        </div>

                        <div className="cart-item-remove ms-3">
                          <i
                            className="fa-solid fa-xmark text-danger"
                            onClick={() => handlecloseItems(item._id)}
                            style={{ cursor: "pointer", fontSize: "20px" }}
                          ></i>
                        </div>
                      </div>
                    ))

                  ) : (
                    <div className="text-center mt-4">
                      <p className="text-muted">No items in the cart.</p>
                    </div>
                  )}

                  <div className="mt-4">
                    <strong className="fs-5">Total: ${calculateTotal().toFixed(2)}</strong>
                  </div>
                  <button
                    className="btn mt-3 w-100 py-2"
                    style={{ backgroundColor: "#64B496", color: "#fff", fontWeight: "bold" }}
                    onClick={checkout}
                  >
                    Checkout
                  </button>
                </Offcanvas.Body>
              </Offcanvas>

            </div>
          </div>
          <div className="bor"></div>
        </div>
      </Navbar>
    </div>
  );
}

export default Navbar_1;
