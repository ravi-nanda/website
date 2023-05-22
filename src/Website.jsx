import React, { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import Typography from "@mui/material/Typography";
// import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import "./Website.css";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { HashLoader } from "react-spinners";
// import Nav from "./Nav";

const Website = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [callData, setCallData] = useState();

  const [counts, setCounts] = useState();
  const callApi = async (skip) => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=${skip}`
      );
      const data = res.data;
      setCallData(data.products);

      setCounts(data.total / 10);
    } catch (error) {
      console.log("error404");
    }
  };
  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    callApi(0);
  }, []);
  const handleChange = (event, value) => {
    switch (value) {
      case 1:
        callApi(0);
        break;
      case 2:
        callApi(10);
        break;
      case 3:
        callApi(20);
        break;
      case 4:
        callApi(30);
        break;
      case 5:
        callApi(40);
        break;
      case 6:
        callApi(50);
        break;
      case 7:
        callApi(60);
        break;
      case 8:
        callApi(70);
        break;
      case 9:
        callApi(80);
        break;
      case 10:
        callApi(90);
        break;
      default:
        break;
    }
  };

  const handlelearnMore = (id) => {
    navigate(`/about/${id}`);
  };
  const loadingCss = {
    margin: "0",
    display: "flex",
    justifyContent: "center",
    alignitems: "center",
    position: "relative",
    top: "45vh",
    left: "50%",
  };

  return (
    <>
      <div>
        {loading ? (
          <HashLoader
            color="#a500cb"
            size={50}
            loading={true}
            cssOverride={loadingCss}
          />
        ) : (
          <div>
            <header>
              <nav className="navbar navbar-expand-lg navbar-light">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse"></div>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link to="/home" className="nav-link">
                        Home <span className="sr-only">(current)</span>
                      </Link>
                    </li>

                    <Link to="/features" className="nav-link">
                      Features
                    </Link>

                    <li className="nav-item">
                      <Link to="/services" className="nav-link">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link">
                        About
                      </Link>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <button className="btn menu-right-btn border" type="submit">
                      Request A Quote
                    </button>
                  </form>
                </div>
              </nav>
            </header>
            <main>
              <div className="section-1">
                <div className="container text-center">
                  <Grid sx={{ flexGrow: 1 }} container spacing={4}>
                    <Grid item xs={12}>
                      <Grid container justifyContent="center">
                        {callData !== undefined ? (
                          callData.map((elemt, i) => {
                            const { id, title, brand, images } = elemt;

                            return (
                              <Grid item className="center_div" spacing={12}>
                                <div className="card">
                                  <img
                                    src={images[0]}
                                    alt="error"
                                    className="card-image-top"
                                  />
                                  <div className="card-body">
                                    <h4 className="card-title">{title}</h4>
                                    <p className="card-text">{brand}</p>
                                    <CardActions>
                                      <Button
                                        size="small"
                                        onClick={() => handlelearnMore(id)}
                                      >
                                        Learn More
                                      </Button>
                                    </CardActions>
                                  </div>
                                </div>
                              </Grid>
                            );
                          })
                        ) : (
                          <div>undefined</div>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </main>
            <div className="footer">
              <Pagination
                color="secondary"
                count={counts}
                variant="text"
                shape="rounded"
                // page={page}
                onChange={handleChange}
                defaultPage="1"
                size="large"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Website;
