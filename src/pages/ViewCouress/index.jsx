import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Video from "../../components/video";

import * as V from "./style";

function ViewCouress({ login }) {
  return (
    <>
      <Navbar login={login} />
      <V.Container>
        <Video />
      </V.Container>
      <Footer />
    </>
  );
}

export default ViewCouress;
