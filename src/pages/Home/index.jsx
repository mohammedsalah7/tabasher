import React from "react";
import Cooker from "../../components/Cooker";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Courses from "../courses";
import * as H from "./style";

function Home() {
  return (
    <>
      <Navbar />
      <H.Container>
        <div className="banner">
          <section className="title">
            <h2>الطبخ</h2>
            <h3>نفس</h3>
          </section>
        </div>
      </H.Container>
      <Courses />
      <Cooker />
      <Footer />
    </>
  );
}

export default Home;
