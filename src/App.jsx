import React from "react";
import Header from "./Header/Header";
import About from "./About/About";
import Companies from "./Companies/Companies";
import Adverts from "./Adverts/Adverts";
import SectionsHead from "./SectionsHead/SectionsHead";
import Services from "./Services/Services";
import Hiring from "./Hiring/Hiring";
import Portfolio from "./Portfolio/Portfolio";
import Feedbacks from "./Feedbacks/Feedbacks";
import Comments from "./Comments/Comments";
import Team from "./Team/Team";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Companies />
      <Adverts />
      <SectionsHead />
      <Services />
      <Hiring />
      <SectionsHead />
      <Portfolio />
      <Feedbacks />
      <Comments />
      <SectionsHead />
      <Team />
      <SectionsHead />
      <Contact />
      <Footer />
    </div>
  )
}
