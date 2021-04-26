import React from "react";

import Cooker from "../../components/Cooker";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Courses from "../../components/courses";
import * as H from "./style";

function Home({ setcode, code, login }) {
  return (
    <>
      <Navbar login={login} />
      <H.Container>
        <div className="banner">
          <section className="title">
            <h2>الطبخ</h2>
            <h3>نفس</h3>
          </section>
        </div>
        <div className="titels">
          <h1 className="sub-title">عن الطبخ</h1>
          <h2 className="courese-title">الدورات المقدمة</h2>
        </div>
      </H.Container>
      <Courses setcode={setcode} code={code} />
      <Cooker />
      <Footer />
    </>
  );
}

export default Home;
