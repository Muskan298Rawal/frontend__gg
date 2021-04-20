import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAppDetail } from "../Redux/Actions/ActionCreator";

function AppDetail(props) {
  const url_data = useParams();

  useEffect(() => {
    props.getAppDetail(url_data.id);
  }, [url_data.id]);

  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div>
      <div className="navbar">
        <b className=" ml-4"> A D S O U L</b>
      </div>
      <div className="navbar_down d-flex justify-content-start align-items-center">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="span_icon_arrow "
          onClick={handleClick}
        />
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
            <b>{url_data.appname}</b>
          </h4>
          <p className=" publisher ml-3">
            <b>{url_data.publisher}</b>
          </p>
        </div>
      </div>
      <table className="table mt-4 border rounded text-center">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Revenue</th>
            <th scope="col">Ad Requests</th>
            <th scope="col">Ad Responses</th>
            <th scope="col">Impressions</th>
            <th scope="col">Clicks</th>
            <th scope="col">Render Rate</th>
          </tr>
        </thead>
        <tbody>
          {props.details.map((data) => {
            let rate = Math.round((data.impressions / data.adResponse) * 100);
            return (
              <tr>
                <td>{data.date}</td>
                <td>${data.revenue}</td>
                <td>{data.adRequest}</td>
                <td>{data.adResponse}</td>

                <td>{data.impressions}</td>
                <td>{data.clicks}</td>
                <td>{rate}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    details: state.detail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAppDetail: (id) => dispatch(getAppDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppDetail);
