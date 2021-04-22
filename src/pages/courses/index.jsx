import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
// import Courses from "../../components/courses";
import Banner from "../../assets/banner.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

import * as C from "./style";
import Card from "../../components/Card";

function Couress({ code }) {
  const [state, setState] = useState({
    data: [],
  });
  useEffect(() => {
    console.log("12123");
    axios
      .get(
        `https://api.tabasher.dev/api/services/app/Curriculums/GetCourseCurriculumByCode?code=${code}`
      )
      .then((res) => {
        console.log(res);
        const response = res.data;
        console.log(response);
        setState({ data: response });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [code]);

  console.log(state.data);
  return (
    <>
      <Navbar />
      <C.Container>
        <div className="show">
          <section>
            {console.log(code)}
            <Card
              // className="cards"
              stylecard="cards"
              // id="cook"
              title="أساسيات الطبخ"
              content="الطبخ هو عبارةٌ عن عمليةٍ يتمّ من خلالها دمج الأطعمة، وإضافة البهارات، والتوابل والمنكهات المختلفة إليها بأساليبَ، وطرقٍ مختلفةٍ بهدف جعلها جاهزة للأكل"
              price="0.0 ريال"
              imgurl={Banner}
              btn={
                <article className="join">
                  <Link
                    to="/Couress/cook"
                    onClick={() => {
                      // setcode("cook");
                    }}
                  >
                    اشترك الآن
                  </Link>
                </article>
              }
            />
            {/* <Courses /> */}
          </section>
          <section className="details">
            <h1 className="title-courses">أساسيات الطبخ</h1>
            <article className="info-courses">
              <p className="time">
                <span className="title-timer">مدة الدورة</span>
                <span className="houres">100 ساعة</span>
              </p>
              <p className="update">
                <h3 className="titel-up">اخر تحديث</h3>
                <h3 className="data-up">تاريخ</h3>
              </p>
            </article>
            <article className="details-courses">
              <h4 className="description">وصف الدورة</h4>
              <p className="description-text">
                الطبخ هو عبارةٌ عن عمليةٍ يتمّ من خلالها دمج الأطعمة، وإضافة
                البهارات، والتوابل والمنكهات المختلفة إليها بأساليبَ، وطرقٍ
                مختلفةٍ بهدف جعلها جاهزة للأكل، وقد اختلف مفهوم الطبخ في العصر
                الحديث عن العصور القديمة فلم يعد الطبخ مهماً من أجل سدّ الجوع
                فقط، بل أصبح يهتم بالتفنّن في تحضير، وتقديم الأطباق المختلفة،
                والتنافس على إظهارها بأجمل الأشكال، وأغنى المكوّنات. إقرأ المزيد
                على موضوع.كوم:
                https://mawdoo3.com/%D9%85%D9%81%D9%87%D9%88%D9%85_%D8%A7%D9%84%D8%B7%D8%A8%D8%AE
              </p>
            </article>
            <articlee>
              <h4 className="new-learn">ماذا سوف تتعلم؟</h4>
              <span className="info-learn">الطبخ ، أساسيات ، مياه</span>
            </articlee>
            <div className="subjects">
              <h1 className="title-subject">مواضيع الدورة</h1>
              <div className="table-1">
                <div className="department">
                  {" "}
                  <h5 className="span-1">منال العالم</h5>
                  <small className="Dep-span-1">قسم 1</small>
                </div>
                <div>
                  <h3 className="dec-1">الأساسيات</h3>
                </div>
                <div>
                  {" "}
                  <h3 className="dec-2">بطاطس بحشوة الجبن</h3>
                </div>
              </div>{" "}
              <div className="table-2">
                <div className="department-2">
                  {" "}
                  <h5 className="span-2"> رمزي المعصب</h5>
                  <small className="Dep-span-2">قسم 2</small>
                </div>
                <div>
                  <h3 className="Dec-2">المشروم</h3>
                </div>
              </div>{" "}
            </div>
          </section>
        </div>
      </C.Container>
      <Footer />
    </>
  );
}

export default Couress;
