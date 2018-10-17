import React from "react";
import cloud from "../../cloud.png";
export default () => {
  return (
    <div>
      <div className="container-fluid mx-auto ">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-center">
              <img
                className="img-fluid"
                src={cloud}
                alt=""
                style={{ width: "30%", height: "30%" }}
              />
            </h1>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <form className="mx-auto" action="#" method="post">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Entrer votre email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Entrer votre mot de passe"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Connexion
            </button>
          </form>
        </div>
        <hr />
        <div className="row text-center">
          <div className="col">
            <h4>Ressources</h4>
            <p className="font-weight-light">
              Nous simplifions l'accès au ressources Multi-Cloud des clients.
            </p>
          </div>
          <div className="col">
            <h4>Hybride</h4>
            <p className="font-weight-light">
              En optant pour des stratégies Multi-Cloud hybride, nous gérons
              toutes les complexités cachées.
            </p>
          </div>
          <div className="col">
            <h4>Fiable</h4>
            <p className="font-weight-light">
              Nous interconnectons les ressources Cloud, garantissant un accès
              rapide, fiable et conforme aux applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
