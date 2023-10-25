import React from "react";
import { Card } from "antd";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Sea = ({ data }) => {
  return (
    <>
      <Link to={`/movie/${data.id}`}>
        <Container>
          <Card className="card" key={data.id}>
            <div key={data.id}>
              <img className="mov" alt="" src={data.image} />

              <h5 className="name">{data.name}</h5>

              <button className="btnn">ViewMore</button>
            </div>
          </Card>
        </Container>
      </Link>
    </>
  );
};
