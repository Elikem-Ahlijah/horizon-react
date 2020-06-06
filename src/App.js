import React from "react";
import logo from "./PIC1.png";
import kenya from "./kenya.jpg";
import nigeria from "./nigeria.jpg";
import ghana from "./ghana.jpg";
import main from "./hohyeong.jpg";
import card1 from "./little.jpg";
import "./App.css";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <nav style={{ height: "12vh", width: "100%", paddingTop: "0px" }}>
        <img
          src={logo}
          alt="horizon-logo"
          style={{ height: "12vh", width: "220px" }}
        />
        <img
          src={ghana}
          alt="ghana-flag"
          style={{
            height: "20px",
            width: "20px",
            marginLeft: "430px",
            marginBottom: "40px",
          }}
        />
        <img
          src={nigeria}
          alt="nigeria-flag"
          style={{
            height: "20px",
            width: "20px",
            marginLeft: "5px",
            marginBottom: "40px",
          }}
        />
        <img
          src={kenya}
          alt="kenya-flag"
          style={{
            height: "20px",
            width: "20px",
            marginLeft: "5px",
            marginBottom: "40px",
          }}
        />

        <p
          style={{
            marginLeft: "1250px",
            marginTop: "-60px",
            fontWeight: "bold",
            color: "grey",
          }}
        >
          ABOUT US
        </p>
      </nav>
      <img
        src={main}
        alt="main-image"
        style={{ height: "700px", width: "100%" }}
      />

      <h3 style={{ marginLeft: "650px", color: "grey", marginTop: "50px" }}>
        PLANS
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "auto",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid lightgrey",
            borderRadius: "7px",
            height: "75vh",
            width: "20%",
            marginRight: "30px",
          }}
        >
          <img
            src={card1}
            alt="card"
            style={{
              marginTop: "0",
              height: "250px",
              width: "270px",
              borderRadius: "5px",
            }}
          />
          <h3 style={{ color: "grey", margin: "10px" }}>VIRTUAL OFFICES</h3>
          <p style={{ margin: "10px" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            voluptatem autem quod rem incidunt id deleniti nam sapiente alias.
          </p>
        </div>
        <div
          style={{
            border: "1px solid lightgrey",
            borderRadius: "7px",
            height: "75vh",
            width: "20%",
            marginRight: "30px",
          }}
        >
          <img
            src={card1}
            alt="card"
            style={{
              marginTop: "0",
              height: "250px",
              width: "270px",
              borderRadius: "5px",
            }}
          />
          <h3 style={{ color: "grey", margin: "10px" }}>CUSTOMIZED OFFICES</h3>
          <p style={{ margin: "10px" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            voluptatem autem quod rem incidunt id deleniti nam sapiente alias.
          </p>
        </div>
        <div
          style={{
            border: "1px solid lightgrey",
            borderRadius: "7px",
            height: "75vh",
            width: "20%",
            marginRight: "30px",
          }}
        >
          <img
            src={card1}
            alt="card"
            style={{
              marginTop: "0",
              height: "250px",
              width: "270px",
              borderRadius: "5px",
            }}
          />
          <h3 style={{ color: "grey", margin: "10px" }}>SERVICED OFFICES</h3>
          <p style={{ margin: "10px" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            voluptatem autem quod rem incidunt id deleniti nam sapiente alias.
          </p>
        </div>
        <div
          style={{
            border: "1px solid lightgrey",
            borderRadius: "7px",
            height: "75vh",
            width: "20%",
          }}
        >
          <img
            src={card1}
            alt="card"
            style={{
              marginTop: "0",
              height: "250px",
              width: "270px",
              borderRadius: "5px",
            }}
          />
          <h3 style={{ color: "grey", margin: "10px" }}>MEETING ROOMS</h3>
          <p style={{ margin: "10px" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            voluptatem autem quod rem incidunt id deleniti nam sapiente alias.
          </p>
        </div>
      </div>

      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          height: "32vh",
          width: "100%",
          backgroundColor: "rgb(11, 2, 92)",
          marginTop: "50px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            paddingLeft: "40px",
            paddingRight: "40px",
            textAlign: "center",
          }}
        >
          <h4 style={{ color: "rgb(185, 185, 7)" }}>VISIT US IN KENYA</h4>
          <h5 style={{ color: "rgb(2, 85, 2)", fontSize: "15px" }}>
            Nairobi, Kenya
          </h5>
          <p style={{ color: "#ffffff" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            voluptatem autem quod rem incidunt id deleniti nam sapiente alias.
          </p>
        </div>

        <div
          style={{
            paddingLeft: "40px",
            paddingRight: "40px",
            textAlign: "center",
          }}
        >
          <h4 style={{ color: "rgb(185, 185, 7)" }}>VISIT US IN GHANA</h4>
          <h5 style={{ color: "rgb(2, 85, 2)", fontSize: "15px" }}>
            Accra, Ghana
          </h5>
          <p style={{ color: "#ffffff" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            voluptatem autem quod rem incidunt id deleniti nam sapiente alias.
          </p>
        </div>

        <div
          style={{
            paddingLeft: "40px",
            paddingRight: "40px",
            textAlign: "center",
          }}
        >
          <h4 style={{ color: "rgb(185, 185, 7)" }}>VISIT US IN NIGERIA</h4>
          <h5 style={{ color: "rgb(2, 85, 2)", fontSize: "15px" }}>
            Lagos, Nigeria
          </h5>
          <p style={{ color: "#ffffff" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            voluptatem autem quod rem incidunt id deleniti nam sapiente alias.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
