import React from "react";
import { Link } from "react-router-dom";

export const Asidebar = () => {


  return (
    <div className="container-fluid">
      <div className="row">
        <div id="wrapper" className="col-xl-12 col-lg-12 col-md-5 d-flex flex-column">
          <ul
            className="navbar-nav sidebar sidebar-dark bg-dark accordion"
            id="accordionSidebar"
            style={{ height: "auto", width: "auto", position: "sticky", top: 0 }}
          >
            {/* Sidebar Brand */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/index">
              <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
              </div>
              <div className="sidebar-brand-text mx-3">Admin Panel</div>
            </Link>

            <hr className="sidebar-divider my-0" />

            {/* Dashboard */}
            <li className="nav-item">
              <Link className="nav-link" to="/desh">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </Link>
            </li>

            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Interface</div>


            <li className="nav-item">
              <Link
                className="nav-link collapsed"
                to="/get"
                data-toggle="collapse"
                data-target="#collapseComponents"
                aria-expanded="false"
                aria-controls="collapseComponents"
              >
                <i className="fas fa-fw fa-cog"></i>
                <span>Product</span>
              </Link>
              <div id="collapseComponents" className="collapse" aria-labelledby="headingComponents" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Custom Components:</h6>
                  <Link className="collapse-item" to="/buttons">Buttons</Link>
                  <Link className="collapse-item" to="/cards">Cards</Link>
                </div>
              </div>
            </li>

            {/* Add Product Section */}
            <li className="nav-item">
              <Link
                className="nav-link collapsed"
                to="/add"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="false"
                aria-controls="collapseUtilities"
              >
                <i className="fas fa-fw fa-wrench"></i>
                <span>Add Product</span>
              </Link>
              <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Custom Utilities:</h6>
                  <Link className="collapse-item" to="/utilities-color">Colors</Link>
                  <Link className="collapse-item" to="/utilities-border">Borders</Link>
                  <Link className="collapse-item" to="/utilities-animation">Animations</Link>
                  <Link className="collapse-item" to="/utilities-other">Other</Link>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/category">
                <i className="fas fa-th-large"></i> {/* Icon for Category */}
                <span className="ms-2">Category</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/subcategory">
                <i className="fas fa-tag"></i> {/* Icon for Subcategory */}
                <span className="ms-2">Subcategory</span>
              </Link>
            </li>

           
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="fas fa-fw fa-columns"></i>
                <span>Website Layout</span>
              </Link>
            </li>

            <hr className="sidebar-divider" />

            {/* Addons Section */}
            <div className="sidebar-heading">Addons</div>

            {/* Pages */}
            <li className="nav-item">
              <Link
                className="nav-link collapsed"
                to="#"
                data-toggle="collapse"
                data-target="#collapsePages"
                aria-expanded="false"
                aria-controls="collapsePages"
              >
                <i className="fas fa-fw fa-folder"></i>
                <span>Pages</span>
              </Link>
              <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Login Screens:</h6>
                  <Link className="collapse-item" to="/login">Login</Link>
                  <Link className="collapse-item" to="/register">Register</Link>
                  <Link className="collapse-item" to="/forgot-password">Forgot Password</Link>
                  <div className="collapse-divider"></div>
                  <h6 className="collapse-header">Other Pages:</h6>
                  <Link className="collapse-item" to="/404">404 Page</Link>
                  <Link className="collapse-item" to="/blank">Blank Page</Link>
                </div>
              </div>
            </li>

            {/* Charts */}
            <li className="nav-item">
              <Link className="nav-link" to="/charts">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Charts</span>
              </Link>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />


          </ul>
        </div>
      </div>
    </div>

  );
};
