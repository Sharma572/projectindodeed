import React from "react";
import { Link, useParams } from "react-router-dom";

const Learn = ({ data }) => {
  console.log(data);
  const { id } = useParams();
  // console.log(id);
  console.log(data[0].id);
  return (
    <div>
      <h1 className="bg-red-500">Learn Page</h1>
      <button>
        <Link to={"/"}>Back</Link>
      </button>
      {/* <div className="min-h-screen grid place-items-center bg-indigo-400 font-mono">
        <div className=" h-80 w-64 rounded-md">
          <div className="flex justify-center items-center leading-none">
            <img
              src="https://images.unsplash.com/photo-1585554414787-09b821c321c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="pic"
              className="h-40 w-56 rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
            />
          </div>
          <div className="p-3">
            <p className="block mb-1 font-extralight">Modelling</p>
            <p className="text-xs tracking-tighter text-gray-600">
              When it is your time, it’s your time. There is no point in
              worrying about what you can’t control.
            </p>
          </div>
          <div className="flex justify-between items-center p-2">
            <img
              src="https://i.pravatar.cc/150?img=58"
              alt=""
              className="rounded-full h-7"
            />
            <div className="flex">
              <i className="material-icons" style="color: #522cad">
                favorite_border
              </i>
              <span className="text-sm ml-1">100</span>
              <i className="material-icons ml-1" style="color: #522cad">
                message
              </i>
              <span className="text-sm ml-1">60</span>
            </div>
          </div>
        </div>
      </div> */}
      {data.map((data) => {
        // console.log(data.id)
        if (id === data.id) {
          console.log(data.id);
          return (
            <div className="min-h-screen grid place-items-center bg-indigo-400">
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
                width="500px"
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
