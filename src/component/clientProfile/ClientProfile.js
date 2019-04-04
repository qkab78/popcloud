import React, { Component } from "react";

class ClientProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client_name: "Ingésup",
      links: [
        {
          csp_name: "AWS",
          address: "ns-165.awdns-20.com",
          status: (
            <span className="badge badge-pill badge-success">
              <i className="fas fa-check-circle" />
            </span>
          )
        },
        {
          csp_name: "Azure",
          address: "ns-165.awdns-25.com",
          status: (
            <span className="badge badge-pill badge-danger">
              <i className="fas fa-times" />
            </span>
          )
        },
        {
          csp_name: "AWS",
          address: "ns-165.awdns-29.com",
          status: (
            <span className="badge badge-pill badge-success">
              <i className="fas fa-check-circle" />
            </span>
          )
        }
      ]
    };
  }
  render() {
    const { links, client_name } = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-center">{client_name}</h1>
          </div>
          <div className="container mt-5">
            <div className="row">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">CSP name</th>
                    <th scope="col">Lien</th>
                    <th scope="col">Etat</th>
                  </tr>
                </thead>

                <tbody>
                  {links.map((link, i) => (
                    <tr key={i}>
                      <th scope="row">{link.csp_name}</th>
                      <td>{link.address}</td>
                      <td>{link.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClientProfile;
