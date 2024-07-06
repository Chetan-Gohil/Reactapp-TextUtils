import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = Text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to upperCase", "success")
  }
  const handleLoClick = () => {
    let newText = Text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to lowerCase", "success")
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  // reverse
  const handlereclick = () => {
    let newtext = "";
    for (let i = Text.length - 1; i >= 0; i--) {
      newtext += Text[i];
    }
    setText(newtext);
    props.showAlert("Text Reversed", "success")
  };
  const handleCapitalizeWordClick = () => {
    let lowercase = Text.toLowerCase();
    let words = lowercase.split(' ');
    let newWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let newText = newWords.join(" ");
    setText(newText);
    props.showAlert("Converted to First Letter Capital", "success")
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(Text);
    props.showAlert("Copied to Clipboard!", "success")
  }
  const handleClearclick = () => {
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared", "success")
  }

  const [Text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-4">
          <textarea
            className="form-control"
            style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
            value={Text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={Text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button disabled={Text.length === 0} className="btn btn-success mx-2 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
        <button disabled={Text.length === 0} className="btn btn-danger mx-2 my-1" onClick={handlereclick}>Convert to Reverse</button>
        <button disabled={Text.length === 0} className="btn btn-secondary mx-2 my-1" onClick={handleCapitalizeWordClick}>Convert to First Capital</button>
        <button disabled={Text.length === 0} className="btn btn-warning mx-2 my-1 text-light" onClick={handleCopy}>Copy Text</button>
        <button disabled={Text.length === 0} className="btn btn-dark mx-2 my-1" onClick={handleClearclick}>Clear</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>Your Text Summary</h3>
        <p>{Text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {Text.length} Characters</p>
        <p>{0.008 * Text.split(" ").filter((element) => { return element.length !== 0 }).length}  Minutes Read</p>
        <h3>Preview</h3>
        <p>{Text.length > 0 ? Text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}



