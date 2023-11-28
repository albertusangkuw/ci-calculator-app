import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func,
  };

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button idName="ac_btn" name="AC" clickHandler={this.handleClick} />
          <Button idName="flip_btn" name="+/-" clickHandler={this.handleClick} />
          <Button idName="percentage_btn" name="%" clickHandler={this.handleClick} />
          <Button idName="ac_btn" name="÷" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button idName="seven_btn" name="7" clickHandler={this.handleClick} />
          <Button idName="eight_btn" name="8" clickHandler={this.handleClick} />
          <Button idName="nine_btn" name="9" clickHandler={this.handleClick} />
          <Button idName="multiplication_btn" name="x" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button idName="four_btn" name="4" clickHandler={this.handleClick} />
          <Button idName="five_btn" name="5" clickHandler={this.handleClick} />
          <Button idName="six_btn" name="6" clickHandler={this.handleClick} />
          <Button idName="minus_btn" name="-" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button idName="one_btn" name="1" clickHandler={this.handleClick} />
          <Button idName="two_btn" name="2" clickHandler={this.handleClick} />
          <Button idName="three_btn"name="3" clickHandler={this.handleClick} />
          <Button idName="plus_btn" name="+" clickHandler={this.handleClick} orange />
        </div>
        <div>
          <Button idName="zero_btn" name="0" clickHandler={this.handleClick} wide />
          <Button idName="dot_btn" name="." clickHandler={this.handleClick} />
          <Button idName="equal_btn" name="=" clickHandler={this.handleClick} orange />
        </div>
      </div>
    );
  }
}
