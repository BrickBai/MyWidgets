import React, { Component } from 'react';
import './Playground.css';
import update from 'immutability-helper';
import { Button } from 'react-bootstrap';

export default class Playground extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      output: '',
      colors: [],
      tags: [],
    };
  }

  getRandomColorHex = () => {
    // generates a random hex string between 0x100000 to 0xFFFFFF
    return Math.floor(Math.random() * 0xEFFFFF + 0x100000).toString(16).toUpperCase();
  }

  handleChange = (event) => {
    this.setState({text: event.target.value});  
  }

  handleSubmit = (event) => {
    const { text } = this.state;
    // map through each row in the input text

    let colorArr = [];
    let output = text.split("\n").map(i => {
      // this.checkStartTag(i);
      // let currentColor = this.state.colors[this.state.colors.length - 1];
      // this.checkCloseTag(i);

      // TODO: move colors in states to local var
      colorArr = this.checkStartTag(i, colorArr);
      let currentColor = colorArr[colorArr.length - 1];
      colorArr = this.checkCloseTag(i, colorArr);

      return <div>{`\\color[${currentColor}]${i}`}</div>;
    });
    this.setState({output});
    event.preventDefault();
  }

  checkStartTag = (str, colorArr) => {
    // use RegExp to check if there is a start tag
    // push the tag and a random color to the stacks if any tag is found
    let reStartTag = new RegExp(/<\s*\w.*?>/, 'i');
    let startTag = reStartTag.exec(str);
    if(startTag !== null) {
      // this.setState((prevState) => {
      //   return {
      //     tags: update(prevState.tags, {$push: [startTag]}),
      //     colors: update(prevState.colors, {$push: [this.getRandomColorHex()]}),
      //   }
      // });
      colorArr.push(this.getRandomColorHex());
    }
    console.log("start: ");
    console.log(startTag);
    console.log(colorArr);
    return colorArr;
  }

  checkCloseTag = (str, colorArr) => {
    // use RegExp to check if there is a close tag
    // pop tag and color stacks if any close tag is found
    let reClosingTag = new RegExp(/<\s*\/\s*\w\s*.*?>|<\s*br\s*>/, 'i');
    let closeTag = reClosingTag.exec(str);
    if(closeTag !== null) {
      console.log("pop color and tags array");
      // this.setState((prevState) => {
      //   return {
      //     tags: update(prevState.tags, {$splice: [[-1, 1]]}),
      //     colors: update(prevState.colors, {$splice: [[-1, -1]]}),
      //   }
      // }, () => {
      //   console.log(this.state.colors);
      // });
      colorArr.pop();
    }
    console.log("close: ");
    console.log(closeTag);
    console.log(colorArr);
    return colorArr;
  }

  render() {
    return (
      <div>
        <form className='Form' onSubmit={this.handleSubmit}>
          <label>
            Paste your code here:
            <textarea rows="10" cols="50" type="text" value={this.state.text} onChange={this.handleChange} />
          </label>
          <Button onClick={this.handleSubmit}> Submit </Button>
        </form>
        <div className='OutputText'>
          {this.state.output}
        </div>
      </div>
    );
  }
}