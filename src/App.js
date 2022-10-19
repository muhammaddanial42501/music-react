import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import background from "./Images/music.jpg";
import keyboard from "./Images/keyboard.jpg";
import "./Components/Style.css";
import Header from "./Components/Header";
import Serivces from "./Components/Services";
import Review from "./Components/Review";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className=" align-items-center container mt-10 mb-10 ">
      <nav className="navbar navbar-expand-sm  justify-content-end container mt-3 mb-3">
        <ul className="navbar-nav">
          <Header name="About"/>
          <Header name="Services"/>
          <Header name="Testimonials"/>
          <Header name="Contact Us"/>   
        </ul>
      </nav>

      <div className="header" style={{ backgroundImage: `url(${background})` }}>
        <div className="d-flex align-items-end flex-column justify-center  ">
          <h1 className="align display-1 text-white mr-10">Music</h1>
          <h1 className="align display-1 justify-center text-white mr-28">&</h1>
          <h1 className="align display-1 text-white mr-10">Game</h1>
        </div>
      </div>

      <div className="justify-content-center align-items-center text-center mt-3 mb-3">
        <h1 className="color1 mt-5 mb-5">About</h1>
        <p className="color2  d-flex flex-column">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam fugiat
        </p>
        <p className="color2 d-flex flex-column">
          tempore aliquid dolores labore, modi voluptates pariatur cumque,
        </p>
        <p className=" color2 d-flex flex-column">
          {" "}
          nostrum quasi debitis incidunt tenetur quisquam vero.
        </p>
      </div>
      <div className="justify-content-center align-items-center text-center container mt-5 mb-5">
        <h1 className="color1 mt-5 mb-5">Serivces</h1>
        <div className="row gx-5 cards">          
          <Serivces name="Game" image="music.jpg"/>
          <Serivces name="Music" image="music.jpg"/>
          <Serivces name="Video" image="music.jpg"/>       
        </div>
      </div>
      <div className="header" style={{ backgroundImage: `url(${background})` }}>
        <h1 className="color1 justify-content-center">Reviews</h1>
        <div className="justify-content-center align-items-center text-center container mt-4 mb-4">
          <div className="row mt-5 mb-5">
           <Review name="  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum incidunt labore veritatis corporis, repudiandae
                optio molestias exercitationem provident totam saepe debitis
                ipsum harum molestiae, pariatur alias nisi," image="danial.jpg" heading="Danial"/>
           <Review name="  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum incidunt labore veritatis corporis, repudiandae
                optio molestias exercitationem provident totam saepe debitis
                ipsum harum molestiae, pariatur alias nisi," image="awais.jpg" heading="Awais"/>
           <Review name="  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatum incidunt labore veritatis corporis, repudiandae
                optio molestias exercitationem provident totam saepe debitis
                ipsum harum molestiae, pariatur alias nisi," image="umair.jpg" heading="Umair"/>          
          </div>
        </div>
      </div>
      <div className="justify-content-center align-items-center text-center  mt-5 mb-5">
        <h2 className=" color1">GET IN TOUCH WITH US</h2>
      </div>
      <div className="row justify-content-center align-items-center text-center">
        <Contact name="Lahore" className="bi bi-geo-alt text-white  mt-3 mb-3" />
        <Contact name="abc@gmail.com" className="bi bi-envelope-open text-white  mt-3 mb-3" />
        <Contact name="abc.linkedin.com" className="bi bi-linkedin text-white" />        
      </div>
      <div>
        <div className="card footer color1 mt-5 mb-5">
          <div className="card-body">
            <h3>GAME & MUSIC</h3>
            <div className="row footer1 justify-content-center align-items-center text-center">
              <Footer name="Our Mission" name2="Latest Tour" name3="Explore " name4="Find us" heading="Links"/>
              <Footer name=" Latest Tour" name2="Latest Tour" name3="Explore " name4="Find us" heading="Navigation"/>
              <Footer name="Explore " name2="Latest Tour" name3="Explore " name4="Find us" heading="Custom Care"/>
              <Footer name="Find us" name2="Latest Tour" name3="Explore " name4="Find us" heading="Contact Us"/>
            
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
