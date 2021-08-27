import React from "react";

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Dashboard</h1>
        <p className="lead">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos nam, id
          fuga repudiandae corporis voluptatibus sint officiis ratione dolorum
          mollitia.
        </p>
        <hr className="my-4" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos nam, id
          fuga repudiandae corporis voluptatibus sint officiis
        </p>
        <a className="btn btn-primary btn-lg" href={`#`} role="button">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
