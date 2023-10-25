import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "antd";
import { Container, Row } from "react-bootstrap";

export const Detail = ({ handleClick }) => {
  const [datas, setDatas] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(" https://apigenerator.dronahq.com/api/HVEHzI06/data")
      .then((res) => res.json())
      .then((data) => {
        const newMovie = data.find((Item) => Item.id === parseInt(id));
        setDatas(newMovie);
      });
  }, [id]);

  return (
    <Container>
      <Row>
        <Card className="details" data={datas} handleClick={handleClick}>
          <img className="mov" alt="" src={datas.image} />
          <h5 className="name">{datas.name}</h5>
          <h6 className="price">Title:{datas.title}</h6>
          <h6 className="price">Releasedate:{datas.releasedate}</h6>
          <h6 className="price">Director:{datas.director}</h6>
          <h6 className="price">Budget:{datas.budget}</h6>
          <h6 className="price">TicketPrice:{datas.ticketPrice}</h6>
          <Button className="car" onClick={() => handleClick(datas)}>
            Add to Cart
          </Button>
          <Button className="book">Book Now</Button>
        </Card>
      </Row>
    </Container>
  );
};
