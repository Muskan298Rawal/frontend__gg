import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Grid } from "@material-ui/core";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCog } from "@fortawesome/free-solid-svg-icons";
import {
  getAppDetail,
  getAppName,
  getValue,
} from "../Redux/Actions/ActionCreator";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Home(props) {
  useEffect(() => {
    props.getAppName();
    props.getValue();
  }, []);

  const convertNum = (num) => {
    if (parseInt(num / 1000000) > 0) {
      return `${parseInt(num / 1000000)}M`;
    } else if (parseInt(num / 1000) > 0) {
      return `${parseInt(num / 1000)}K`;
    } else {
      return num;
    }
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="flex-start"
      >
        <Grid container item md={6} xs={12} className="grid_contentl ">
          <Grid container item xs={12} className="grid_contentl1 ">
            <Grid item xs={12} className="mt-3">
              {" "}
              <b className="ml-5 small">A D S O U L</b>
            </Grid>
            <Grid item xs={12} className="mb-4 text-center">
              {" "}
              <img
                src="assets/asset1.svg"
                alt="bargraph"
                className="img-fluid"
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            className="grid_contentl2 d-none d-md-block"
          >
            <Grid item xs={12} className=" mt-3">
              {" "}
              <p className="heading_down ml-5 mt-4">Revenue Optimization</p>
            </Grid>

            <Grid container item xs={12} className="ml-5">
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                item
                xs={12}
              >
                <Grid item xs={6} className=" mt-2 ">
                  <img
                    src="assets/icon1.svg"
                    alt="Fill Rate"
                    className="mb-2 img-fluid"
                    style={{ height: "80%" }}
                  />
                  <br />
                  <p>Fill Rate</p>
                </Grid>
                <Grid item xs={6} className=" mt-2 ">
                  <img
                    src="assets/icon2.svg"
                    alt="CTR"
                    className="mb-2 img-fluid"
                    style={{ height: "80%" }}
                  />
                  <br />
                  <p>Improve CTR</p>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} className="ml-5">
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
              >
                <Grid item xs={6} className="mt-2">
                  <img
                    src="assets/icon3.svg"
                    alt="Refresh Rate"
                    className="mb-2 img-fluid"
                    style={{ height: "80%" }}
                  />
                  <br />
                  <p>Refresh Rate</p>
                </Grid>
                <Grid item xs={6} className=" mt-2">
                  <img
                    src="assets/icon4.svg"
                    alt="Integration"
                    className="mb-2 img-fluid"
                  />
                  <br />
                  <p>Quick Integration</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6} className="grid_contentr">
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="flex-start"
            className="mt-2 mt-md-5 "
            item
            xs={12}
          >
            <Grid item xs={6} className="grid_right_top">
              <h3 className="ml-5 ">Apps</h3>
            </Grid>
            <Grid item xs={6} className=" grid_right_top text-right ">
              <FontAwesomeIcon icon={faCog} className="span_icon" />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            item
            xs={12}
            className="grid_right_down"
          >
            {props.apps.map((data) => {
              let index = data.id;
              let myobj = props.values[index];
              return (
                <>
                  {myobj ? (
                    <Grid
                      container
                      item
                      xs={10}
                      className="grid_right_down_items mt-4 mb-3"
                    >
                      <Grid
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="flex-start"
                        item
                        xs={12}
                      >
                        <Grid item xs={10} className="mt-2">
                          <div className="d-flex justify-content-start align-items-center">
                            <img
                              src="https://www.colourcraftdirect.com/wp/wp-content/uploads/2015/05/products-S3_ORNGE_EBB.jpg"
                              alt="box"
                              height="50px"
                              width="50px"
                              className="ml-2"
                            />
                            <div>
                              <h4 className="ml-3">
                                {" "}
                                <b>{data.appName}</b>
                              </h4>
                              <p className=" publisher ml-3">
                                <b>{data.publisherName}</b>
                              </p>
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={2} className="mt-2 text-right">
                          <Link
                            to={`/${data.appName}/${data.publisherName}/${data.id}`}
                          >
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="span_icon_arrow "
                            />
                          </Link>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="flex-start"
                        item
                        xs={12}
                      >
                        <Grid container item xs={12}>
                          <Grid item xs={3}>
                            <p className="para">
                              <b>Revenue</b>
                            </p>
                            <h5>
                              <b>${convertNum(myobj.rev)}</b>
                            </h5>
                          </Grid>
                          <Grid item xs={3}>
                            <p className="para">
                              <b>Ad Requests</b>
                            </p>
                            <h5>
                              <b>{convertNum(myobj.req)}</b>
                            </h5>
                          </Grid>
                          <Grid item xs={3}>
                            <p className="para">
                              <b>Ad Response</b>
                            </p>
                            <h5>
                              <b>{convertNum(myobj.res)}</b>
                            </h5>
                          </Grid>
                          <Grid item xs={3}>
                            <p className="para">
                              <b>Impressions</b>
                            </p>
                            <h5>
                              <b>{convertNum(myobj.imp)}</b>
                            </h5>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

function mapStateToProps(state) {
  return {
    apps: state.apps,
    values: state.value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAppName: () => dispatch(getAppName()),
    getValue: () => dispatch(getValue()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
