import React, { useState, useEffect } from "react";
import * as C from "./style";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../Card";
function Courses({ setcode, code }) {
  const [state, setState] = useState({
    data: [],
  });
  useEffect(() => {
    axios
      .get("https://api.tabasher.dev/api/services/app/Curriculums/GetAll")
      .then((res) => {
        const response = res.data;
        setState({ data: response });
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  console.log(state.data);
  return (
    <C.Container>
      <div className="all">
        {state.data.result?.map((data, id) => (
          <Card
            stylecard="courses"
            key={id}
            id="cook"
            title={data.name}
            content={data.description}
            price={data.price}
            imgurl={data.imageUrl}
            btn={
              <article className="join">
                <Link
                  to="/Couress/cook"
                  onClick={() => {
                    setcode("cook");
                  }}
                >
                  اشترك الآن
                </Link>
              </article>
            }
          />
        ))}
      </div>
    </C.Container>
  );
}

export default Courses;
