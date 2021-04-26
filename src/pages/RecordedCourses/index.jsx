import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/index";
import * as R from "./style";
import axios from "axios";

function Recorded({ code, login }) {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.tabasher.dev/api/services/app/Curriculums/GetCourseCurriculumByCode?code=${code}`
      )
      .then((res) => {
        const response = res.data.result;
        setState(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [code]);

  return (
    <>
      <Navbar login={login} />
      <R.Container>
        {!loading && (
          <section>
            <Card
              stylecard="cards"
              title={state.name}
              content={state.description}
              imgurl={state.imageUrl}
              btn={
                <article className="join">
                  <Link to="/user/view">مشاهدة الدورة</Link>
                </article>
              }
            />
          </section>
        )}
      </R.Container>
      <Footer />
    </>
  );
}

export default Recorded;
