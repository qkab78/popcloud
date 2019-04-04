import React from "react";
export default () => {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex flex-column align-items-center justify-content-center vh-100">
        <h1 className="title">Bienvenue chez Popcloud</h1>
        <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat inventore rerum, animi sunt explicabo optio consequuntur hic! A iure dolor ad molestiae, itaque et facere omnis consequatur odio porro rem blanditiis cupiditate sed veniam quaerat laudantium libero exercitationem magni maiores tempore doloremque ea non? Atque ipsum et expedita rerum ipsa?</p>
      </div>
      <hr />
      <div className="flex flex-row h-100">
        <div className="col">
          <h4 className="subtitle">Ressources</h4>
          <p className="font-weight-light">
            Nous simplifions l'accès au ressources Multi-Cloud des clients.
            </p>
        </div>
        <div className="col">
          <h4 className="subtitle">Hybride</h4>
          <p className="font-weight-light">
            En optant pour des stratégies Multi-Cloud hybride, nous gérons
              toutes les complexités cachées.
            </p>
        </div>
        <div className="col">
          <h4 className="subtitle">Fiable</h4>
          <p className="font-weight-light">
            Nous interconnectons les ressources Cloud, garantissant un accès
              rapide, fiable et conforme aux applications.
            </p>
        </div>
      </div>
    </div>
  );
};
