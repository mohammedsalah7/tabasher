import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card";
import { useHistory } from "react-router-dom";
import axios from "axios";

import * as C from "./style";

function Couress({ code, login }) {
  const history = useHistory();
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

  const auth = () => {
    login ? history.push("/user/recorded") : history.push("/user/register");
  };
  console.log("0000000", login);
  return (
    <C.All>
      <Navbar login={login} />
      <C.Container>
        <div className="show">
          {!loading && (
            <>
              <section>
                <Card
                  stylecard="cards"
                  title={state.name}
                  content={state.description}
                  price={state.price}
                  imgurl={state.imageUrl}
                  btn={
                    <article className="join">
                      <span
                        onClick={() => {
                          auth();
                        }}
                      >
                        شراء الان مجانا
                      </span>
                    </article>
                  }
                />
              </section>
              <div className="details">
                <h1 className="title-courses">{state.name}</h1>
                <div className="info-courses">
                  <p className="time">
                    <span className="title-timer">مدة الدورة</span>
                    <span className="houres">{state.totalHours} ساعة </span>
                  </p>
                  <p className="update">
                    <span className="titel-up "> اخر تحديث</span>
                    <span className="data-up">
                      {state.lastModificationTime}
                    </span>
                  </p>
                </div>
                <div className="details-courses">
                  <h4 className="description">وصف الدورة</h4>
                  <p className="description-text">{state.description}</p>
                </div>
                <div>
                  <h4 className="new-learn">ماذا سوف تتعلم؟</h4>
                  {JSON.parse(state.lessonsLearned).map((Data, id) => (
                    <span key={id} className="info-learn">
                      {Data.value}
                    </span>
                  ))}
                </div>
                <div className="subjects">
                  <h1 className="title-subject">مواضيع الدورة</h1>
                  {state.sections?.map((data, id) => (
                    <div key={id} className="table-1">
                      <div className="department">
                        {" "}
                        <h5 className="span-1">{data.name}</h5>
                        <small className="Dep-span-1">قسم {data.order}</small>
                      </div>

                      {data.lectures.map((subdata, id) => (
                        <div key={id}>
                          {" "}
                          <h3 className="dec-2">{subdata.name}</h3>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </C.Container>

      <Footer />
    </C.All>
  );
}

export default Couress;
