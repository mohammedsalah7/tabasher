import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import * as V from "./style";

function Video({ code }) {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState();
  const [Url, setUrl] = useState("LzeiQIiBRe8");
  const [stateIndex, setStateIndex] = useState("الأساسيات");
  useEffect(() => {
    axios
      .get(
        `https://api.tabasher.dev/api/services/app/Curriculums/GetCourseCurriculumByCode?code=cook`
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

  console.log(state);
  return (
    <>
      {!loading && (
        <V.Container>
          <div className="all-video">
            <h3>{stateIndex}</h3>
            <ReactPlayer url={`http://www.youtube.com/watch?v=${Url}`} />
          </div>
          <div className="all">
            {state.sections?.map((data) => (
              <div key={data.id} className="table-1">
                <div className="department">
                  {" "}
                  <buttons className="span-1">
                    <span className="span-btn">{data.name}</span>
                  </buttons>
                  {data.lectures.map((subdata) => (
                    <div key={subdata.id}>
                      {" "}
                      <button
                        id={subdata.id}
                        className="dec-2"
                        onClick={(e) => {
                          setUrl(subdata.videoUrl);
                          setStateIndex(subdata.name);
                        }}
                      >
                        {subdata.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </V.Container>
      )}
    </>
  );
}

export default Video;
