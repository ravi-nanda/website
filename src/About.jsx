import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import axios from "axios";
const About = () => {
  const { id } = useParams();
  const [datas, setData] = useState();
  const [pageid, setPageid] = useState();
  const AboutApi = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/`);
      const data = res.data;
      setData(data.products);
    } catch (error404) {
      alert("page not found #404");
    }
  };

  useEffect(() => {
    AboutApi();
  }, []);

  useEffect(() => {
    if (datas) {
      Showid();
    }
  });

  const Showid = () => {
    const updatedId = datas.filter((elemnt) => elemnt.id === +id);
    setPageid(updatedId);
  };

  return (
    <>
      <main>
        <div className="section-1">
          <div className="container text-center">
            <Grid sx={{ flexGrow: 1 }} container spacing={4}>
              <Grid item xs={12}>
                <Grid container justifyContent="center">
                  {pageid ? (
                    pageid.map((elemt, i) => {
                      const { images, description } = elemt;

                      return (
                        <Grid key={i} item className="center_div" spacing={12}>
                          <div className="card">
                            <img
                              src={images[0]}
                              alt="imagerror"
                              className="card-image-top"
                            />
                            <div className="card-body">
                              <p>{description}</p>
                            </div>
                          </div>
                        </Grid>
                      );
                    })
                  ) : (
                    <div>No Data</div>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
