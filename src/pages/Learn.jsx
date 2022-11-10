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
      <h1 className="flex justify-center text-2xl">Learn Page</h1>
      <button className="bg-blue-500 lg:ml-60 sm:ml-3 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        <Link to={"/"}>Back</Link>
      </button> 
      {data.map((data) => {
        // console.log(data.id)
        if (id === data.id) {
          console.log(data.id);
          return (
            <div
              className="col-md-4 animated fadeIn flex justify-center align-middle"
              key={data.id}
            >
              <div className="card">
                <div className="card-body flex justify-center flex-col ">
                  <div className="w-full ">
                    <img
                      className="card-img-top flex justify-center"
                      src={data.imageUrl}
                      alt={data.id}
                    />
                  </div>
                  <div className="flex justify-center">
                    <h5 className="">{data.bodyType}</h5>
                    <strong className="mx-4">{data.modelName}</strong>
                    <span>{data.modelType}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Learn;
