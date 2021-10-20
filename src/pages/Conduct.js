import React from "react";
import NavBar from "../components/Navigation";
import Firstsection from "../components/Conduct_First_section";
import Card from "../components/Conduct_Second_section";
import Collab from "../components/Conduct_Third_Section";
import conduct_styles from "./Conduct.css";

import Footer from "../components/footer";
function Conduct() {
  return (
    <div styles={conduct_styles} className="conduct-class">
      <NavBar />
      <Firstsection />
      <Card />
      <Collab />
      <Footer />
    </div>
  );
}
export default Conduct;