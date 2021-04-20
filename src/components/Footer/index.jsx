import React from "react";
import * as F from "./style";
import Mada from "../../assets/cc.png";
import Visa from "../../assets/mada.png";
import Logo from "../../assets/logo.png";
// import imgNav from "../../assets/imgnav.jpg";
function Footer() {
  return (
    <F.Container>
      <div className="Footer">
        <section className="left">
          <a href="#w" className="privicy">
            الشروط والأحكام
          </a>
          <article>
            <img src={Visa} alt="img nav" className="img-visa" />
            <img src={Mada} alt="img nav" className="img-mada" />
          </article>
        </section>
        <section className="rihgt">
          <p className="copy-rihgt">الحقوق محفوظة - محمد علي - ٢٠٢١</p>
          <p className="links-site-company">
            صنع بإتقان على{" "}
            <a href="#e" className="link-site">
              طباشير{""}
              <img src={Logo} alt="img nav" className="img-logo" />
            </a>
          </p>
        </section>
      </div>
    </F.Container>
  );
}

export default Footer;
