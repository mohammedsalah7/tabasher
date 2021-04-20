import React from "react";
import * as C from "./style";
import Banner from "../../assets/banner.jpg";
function Courses() {
  return (
    <C.Container>
      <h1 className="titel">عن الطبخ</h1>
      <div className="courses">
        <h2 className="sub-title">الدورات المقدمة 📒</h2>
        <section>
          <img src={Banner} alt="img nav" className="img-coureses" />
          <h2 className="title-courses">أساسيات الطبخ</h2>
          <h3 className="price">0 ريال</h3>
          <p className="info">
            الطبخ هو عبارةٌ عن عمليةٍ يتمّ من خلالها دمج الأطعمة، وإضافة
            البهارات، والتوابل والمنكهات المختلفة إليها بأساليبَ، وطرقٍ مختلفةٍ
            بهدف جعلها جاهزة للأكل، وقد اختلف مفهوم الطبخ في ال...
          </p>
          <article className="join">
            <a href="#d">اشترك الآن</a>
          </article>
        </section>
      </div>
    </C.Container>
  );
}

export default Courses;
