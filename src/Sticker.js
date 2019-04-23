import React, { Component } from 'react';
import './App.css';
import heart from './heart.png';
import angry from './angry.png';
import jiayou from './jiayou.png';
import bbt from './bbt.png';
class Sticker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            replacedText:'',
            img: [<img src={heart}></img>]
        };
      }
    replaceWords = () => {
        let SampleText = this.props.text.toString();
        let NewText = SampleText.split(" ");
        console.log(NewText);
        // let imgsrc= <img src={heart}></img>;
        // let NewText = SampleText.replace("an", this.state.img);
    //    SampleText.add(<img src={heart}></img>);
    for (let i=0;i<NewText.length;i++){
        if (NewText.includes("happy")){
            var index = NewText.indexOf("happy");
            NewText.splice(index, 1,<img src={heart}></img>);
            // NewText.push(<img src={heart}></img>)
        }
        if (NewText.includes("angry")){
            var index = NewText.indexOf("angry");
            NewText.splice(index, 1,<img src={angry}></img>);
        }
        if (NewText.includes("加油")){
            var index = NewText.indexOf("加油");
            NewText.splice(index, 1,<img src={jiayou}></img>);
        }
        if (NewText.includes("bbt")){
            var index = NewText.indexOf("bbt");
            NewText.splice(index, 1,<img src={bbt}></img>);
        }
    }
        let finalArray=[];
        for (let i=0;i<NewText.length;i++){
            finalArray.push(NewText[i]);
            finalArray.push(" ");
        }
    
        // for (let i=0;i<NewText.length;i++){
        //      finalArray.push(NewText[i] + " ");
        // }
        
        this.setState({
            SampleText: finalArray
        })
        //console.log("this is" + NewText);
        console.log(finalArray);
         //return ( )
        
    }
  

    render() {
      return (
        <div className="sticker">
          {/* <h1>{this.props.text}</h1> */}
          <button onClick={this.replaceWords}>STICKER-FY</button>
          <br></br>
          {this.state.SampleText}
          
        </div>
      );
    }
  }
  
  export default Sticker;
  