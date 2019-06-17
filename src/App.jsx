import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ImgCard from "./components/ImgCard";
import imgData from "./imgData.json";

class App extends Component {
  state = {
    imgData,
    currentScore: 0,
    bestScore: 0,
    clicked: []
  };

  render() {
    // copy the image list and shuffle it
    const imgData = [...this.state.imgData];
    this.shuffle(imgData);

    return (
      <div>
        <Header />
        <Navbar
          score={this.state.currentScore}
          bestScore={this.state.bestScore}
        />
        <div className="card-list">
          {imgData.map(img => (
            <ImgCard img={img} key={img.id} click={this.handleImageClick} />
          ))}
        </div>
        />
        <Footer />
      </div>
    );
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  handleImageClick = (e, img) => {
    e.preventDefault();
    const isClicked = this.state.clicked.indexOf(img.id) >= 0;
    if (isClicked) {
      console.log("clicked same one twice, game over");
      // reset the game
      // TODO tell the user what happened
      this.setState({
        clicked: [],
        currentScore: 0
      });
    } else {
      console.log("clicked a new image, keep going");
      const newScore = this.state.currentScore + 1;
      if (newScore === this.state.imgData.length) {
        // user won the game
        // TODO tell the user what happened
        this.setState({
          clicked: this.state.clicked.concat(img.id),
          currentScore: newScore,
          bestScore: Math.max(this.state.bestScore, newScore)
        });
      } else {
        // user is still playing
        this.setState({
          clicked: this.state.clicked.concat(img.id),
          currentScore: newScore,
          bestScore: Math.max(this.state.bestScore, newScore)
        });
      }
    }
  };
}

export default App;
