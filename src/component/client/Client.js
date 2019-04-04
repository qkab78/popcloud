import React, { Component } from "react";
import { Link } from "react-router-dom";
class Client extends Component {
  render() {
    const { csp_name, client_name, company_name, description } = this.props;
    const images = [
      { csp_name, client_name, company_name, description },
      { csp_name, client_name, company_name, description },
      { csp_name, client_name, company_name, description },
      { csp_name, client_name, company_name, description }
    ];
    const cardStyle = {
      width: "18rem",
      marginLeft: "20px",
      marginRight: "20px",
      marginBottom: "20px"
    };
    let clients = images.map((client, i) => (
      <div className="card" key={i} style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">
            {client.csp_name != null ? client.csp_name : client.client_name}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {client.company_name}
          </h6>
          <p className="card-text">{client.description}</p>
          <div className="card-link">
            <Link to="/clientProfile">Profil</Link>
          </div>
        </div>
      </div>
    ));
    return clients;
  }
}

export default Client;
