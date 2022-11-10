import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { data } from "./CarsData";
import Index from "./component/Index";
import Learn from "./Pages/Learn";
import Shop from "./Pages/Shop";

const App = () => {
// console.log(data);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/learn/:id" element={<Learn data={data} />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
