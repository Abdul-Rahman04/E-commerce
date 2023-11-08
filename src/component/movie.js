import { Sea } from "../card";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

const Movie = () => {
  const [datas, setDatas] = useState([]);

  const [searchFilter, setSearchFilter] = useState("");
  const inputChanged = (event) => {
    setSearchFilter(event.target.value);
  };
  const searchData = datas.filter((u) =>
    u.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  useEffect(() => {
    fetch("https://apigenerator.dronahq.com/api/uW2i1QLC/data")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  return (
    <>
      <input
        id="searchInput"
        type="text"
        placeholder="Search "
        name="search"
        value={searchFilter}
        onChange={inputChanged}
        className="searchbar"
      />

      <Row>
        {searchData.map((data) => (
          // data va card ku props panrom
          <Col md={3}>
            <Sea data={data} key={data.id} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Movie;
