import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase was Clicked" + Text);
    let newtext = Text.toUpperCase();
    setText(newtext);
  };
  const handleLoClick = () => {
    console.log("LowerCase was Clicked" + Text);
    let newtext = Text.toLowerCase();
    setText(newtext);
  };
  const handleonChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = () =>{
    console.log("Clear text was Clicked");
    let newtext = ("");
    setText(newtext);
    
  }
  const handleExtraspace = () =>{
    console.log("Remove Extra space");
    let newtext = Text.split(/[ ]+/);
    setText(newtext.join(" "));
  }
  const handleofcopy = () => {
    console.log("I am copy");
    var Text = document.getElementById("myBox");
    Text.select();
    // Text.setSelectionRange(0, 999);
    navigator.clipboard.writeText(Text.value);
  }
  
  const [Text, setText] = useState("");
  // setText("Enter the text outside here");
  return (
    <div>
      <h1 style={{color:props.mode === 'dark'?'white':'#042743'}}>{props.heading}</h1>
      <form>
        <div className="form-group my-2">
          <textarea
          style={{backgroundColor:props.mode === 'dark'?'grey':'white',
        color:props.mode === 'dark'?'white':'#042743'}}
            className="form-control"
            value={Text} 
            onChange={handleonChange}
            id="myBox"
            rows="5"
          ></textarea>
        </div>
      </form>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear text</button>
      <button className="btn btn-primary mx-3" onClick={handleofcopy}>Copy Text</button>
      <button className="btn btn-primary mx-3 my-3" onClick={handleExtraspace}>Remove Extra Spaces</button>
      <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{Text.split(" ").length} Words and {Text.length} Character</p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Enter something in the textbox above to preview it here..."}</p>
      </div>
    </div>
  );
}
