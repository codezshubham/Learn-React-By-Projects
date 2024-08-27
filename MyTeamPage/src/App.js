import React from "react";
import Testimonial from "./Components/Testimonial.jsx";
import reviews from "./data";

const App = () => {
  return (
        <Testimonial reviews = {reviews}/>
   );
};

export default App;
