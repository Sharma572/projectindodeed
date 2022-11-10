import React from "react";
import { Link, useParams } from "react-router-dom";
import "./learn.css";

const Learn = ({ data }) => {
  console.log(data);
  const { id } = useParams();
  // console.log(id);
  console.log(data[0].id);
  return (
    <div>
      <h1>Learn Page</h1>
      <button>
        <Link to={"/"}>Back</Link>
      </button>

      {data.map((data) => {
        // console.log(data.id)
        if (id === data.id) {
          console.log(data.id);
          return (
            <div className="mt-5">
              <div key={data.id}>
                <p>{data.bodyType}</p>
                <div>
                  <div>
                    <strong>{data.modelName}</strong>
                    <span>{data.modelType}</span>
                  </div>
                </div>
              </div>
              <img
                className="volvo__img"
                src={data.imageUrl}
                alt={data.id}
                width="800px"
                height="100%"
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Learn;
