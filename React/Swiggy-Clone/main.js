import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Header from "./src/components/Header";
import Top from "./src/components/Top";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import { Shimmer } from "./src/components/RestaurantSkeleton";
import { TopShimmer } from "./src/components/TopSkeleton";
import React, { useState } from "react";

const App = () => {
  const [searchText, setSearchText] = useState("");
console.log("App:", searchText);
  return (
    <div className="container">
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Top />
      <Body searchText={searchText} />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
