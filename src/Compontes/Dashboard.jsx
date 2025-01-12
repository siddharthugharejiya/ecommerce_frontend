import React, { useLayoutEffect, useState } from "react";
import "../App.css";
import { Asidebar } from "./Asidebar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LineController,
  Tooltip,
  BarElement,
  BarController,
  Title,
  Legend,
  ArcElement,
  DoughnutController,
} from 'chart.js';
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LineController,
  BarElement,
  BarController,
  Tooltip,
  Title,
  Legend,
  ArcElement,
  DoughnutController
)
// Satisfaction Chart Data
const satisfactionData = {
  labels: ["Satisfied", "Neutral", "Unsatisfied"],
  datasets: [
    {
      label: "User Satisfaction",
      data: [70, 20, 10],
      backgroundColor: ["#4caf50", "#ffeb3b", "#f44336"],
      hoverBackgroundColor: ["#66bb6a", "#ffee58", "#e57373"],
    },
  ],
};


export const Dashboard = () => {

  const [state, setState] = useState([]);
  useLayoutEffect(() => {
    fetch(`https://ecommerce-backend-zlrs.onrender.com/login`)
      .then(res => res.json())
      .then(res => {
        setState(res.data)
      })
  }, []);

  const userGrowthData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "User Growth",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "#4e73df",
        borderColor: "#4e73df",
      },
    ],
  };

  const salesData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [40, 48, 60, 70, 80, 90, 100],
        backgroundColor: "#1cc88a",
      },
    ],
  };

  const trafficData = {
    labels: ["Desktop", "Tablet", "Mobile"],
    datasets: [
      {
        label: "Traffic Source",
        data: [60, 20, 20],
        backgroundColor: ["#36b9cc", "#f6c23e", "#e74a3b"],
      },
    ],
  };

  const doughnutData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Doughnut Chart",
        data: [300, 50, 100],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
        hoverBackgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
      },
    ],
  };

  const pieData = {
    labels: ["Direct", "Referral", "Social"],
    datasets: [
      {
        label: "Pie Chart",
        data: [300, 50, 100],
        backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"],
        hoverBackgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"],
      },
    ],
  };

  const revenueData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Revenue",
        data: [75, 85, 95, 105, 115, 125, 135],
        backgroundColor: "#ff9f40",
      },
    ],
  };

  const performanceData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Performance",
        data: [120, 130, 140, 150],
        backgroundColor: "#6a67ce",
      },
    ],
  };

  const engagementData = {
    labels: ["Likes", "Comments", "Shares"],
    datasets: [
      {
        label: "User Engagement",
        data: [400, 300, 200],
        backgroundColor: ["#42a5f5", "#66bb6a", "#ffa726"],
      },
    ],
  };

  return (
    <div className="dashboard container-fluid bg-dark text-white">
      <div className="row">

        <div className="col-lg-3 col-md-4 col-sm-12">
          <Asidebar />
        </div>

        <div className="col-lg-9 col-md-8 col-sm-12">
          <div className="main-content">

            <div className="row mb-4">
              <div className="col-12">
                <div className="card shadow bg-dark text-white">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-light">User Data</h6>
                  </div>
                  <div className="card-body">
                    <table className="table table-bordered table-dark table-striped">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {state.map((el) => (
                          <tr key={el._id}>
                            <td>{el.username}</td>
                            <td>{el.email}</td>
                            <td>{el.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="row justify-content-between">
              {[{ platform: "Facebook", logo: "facebook-f", data: "1.2k Followers" },
              { platform: "Twitter", logo: "twitter", data: "800 Followers" },
              { platform: "Instagram", logo: "instagram", data: "1.5k Followers" },
              { platform: "LinkedIn", logo: "linkedin-in", data: "500 Connections" }]
                .map((social, idx) => (
                  <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={idx}>
                    <div className="card shadow text-center bg-dark text-white">
                      <div className="card-body">
                        <i className={`fab fa-${social.logo} fa-2x mb-3`}></i>
                        <h6 className="font-weight-bold text-light">{social.platform}</h6>
                        <p className="fs-light">{social.data}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="row mb-4">
              <div className="col-lg-6 col-md-12">
                <div className="card shadow bg-dark text-white">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-light">User Growth Chart</h6>
                  </div>
                  <div className="card-body">
                    <Line data={userGrowthData} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card shadow bg-dark text-white">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-light">Sales Chart</h6>
                  </div>
                  <div className="card-body">
                    <Bar data={salesData} />
                  </div>
                </div>
              </div>
            </div>

            {/* Traffic Source Section */}
            <div className="row mb-4 justify-content-center">
              <div className="col-12 col-lg-9 col-md-8 "> 
                <div className="card shadow bg-dark text-white">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-light">Traffic Source</h6>
                  </div>
                  <div className="card-body">
                    <Bar data={trafficData} options={{ indexAxis: 'y' }}  style={{height:"400px"}}/>
                  </div>
                </div>
              </div>
            </div>

            {/* Doughnut Chart Section */}
            <div className="row mb-4">
              <div className="col-lg-6 col-md-12">
                <div className="card shadow bg-dark text-white">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-light">Doughnut Chart</h6>
                  </div>
                  <div className="card-body">
                    <Doughnut data={doughnutData} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card shadow bg-dark text-white">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-light">Pie Chart</h6>
                  </div>
                  <div className="card-body">
                    <Pie data={pieData} />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Charts Section */}
            <div className="row mb-4">
              <div className="col-lg-6 col-md-12">
                <div className="card shadow bg-dark text-white">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-light">Revenue Chart</h6>
                  </div>
                  <div className="card-body">
                    <Bar data={revenueData} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card shadow bg-dark text-white">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-light">Performance Chart</h6>
                  </div>
                  <div className="card-body">
                    <Bar data={performanceData} />
                  </div>
                </div>
              </div>
              
              <div className="row mb-4">
                <div className="col-lg-6 col-md-12">
                  <div className="card shadow bg-dark text-white">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-light">Admin Engagement Chart</h6>
                    </div>
                    <div className="card-body">
                      <Doughnut data={engagementData} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="card shadow bg-dark text-white">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-light">User Satisfaction Chart</h6>
                    </div>
                    <div className="card-body">
                      <Doughnut data={satisfactionData} />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
