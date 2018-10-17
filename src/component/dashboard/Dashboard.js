import React, { Component } from "react";
// import Client from "../client/Client";
import ClientProfile from "../clientProfile/ClientProfile";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Fournisseurs de solutions Cloud",
      csp_name: "AWS",
      company_name: "Amazon Web Services",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content."
    };
  }
  render() {
    const { title, csp_name, company_name, description } = this.state;
    const cardContainer = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "start"
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-center">{title}</h1>
          </div>
        </div>
        <div className="row" style={cardContainer}>
          {/* <Client
            csp_name={csp_name}
            company_name={company_name}
            description={description}
          /> */}
          <ClientProfile />
        </div>
      </div>
    );
  }
}

export default Dashboard;
