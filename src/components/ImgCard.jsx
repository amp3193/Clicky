import * as React from "react";

class ImgCard extends React.Component {
  state = {
    hover: false,
  };

  onMouseEnter = e => {
    this.setState({
      hover: true
    });
  };

  onMouseLeave = e => {
    this.setState({
      hover: false
    });
  };

  render() {
    const style = {};
    if (this.state.hover) {
      style.transform = "scale(1.15)";
      style.boxShadow = "0 0 4px 4px yellow";
    }

    return (
      <div className="card" style={style}>
        <img
          src={this.props.img.image}
          alt=""
          onClick={e => this.props.click(e, this.props.img)}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        />
      </div>
    );
  }
}

export default ImgCard;
