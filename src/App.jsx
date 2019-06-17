import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ImgCard from "./components/ImgCard";
import imgData from "./imgData.json";

class App extends Component {
  state = {
    imgData
  };

  click = () => {
    //if clicked then set state isClicked = true for the id
    this.setState({ isClicked: true });
  };

  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <div>
          {this.state.imgData.map(img => (
            <ImgCard isClicked={img.isClicked} key={img.id} image={img.image} />
          ))}
        </div>
        />
        <Footer />
      </div>
    );
  }
}

export default App;
