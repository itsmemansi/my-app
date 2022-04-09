import React, {useState} from 'react'
export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case!", "success");
  }

  const handleLowClick = () => {
    console.log("LoweCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case!", "success");
  }

  const handleClearTextClick = () => {
    console.log("Clear text");
    let newText = "";
    setText(newText);
    props.showAlert("Cleared text!", "success");
  }

  const handleCopy = () => {
    console.log("I am copy");
    var txt = document.getElementById("myBox");
    txt.select();
    navigator.clipboard.writeText(txt.value);
    props.showAlert("Copied text!", "success");
  }

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }
  return (
    <>
      <div className='container' style={{color: (props.mode === "dark" )? "white" : "#042743"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className='form-control' id="myBox" rows="8" value={text} onChange = {handleOnChange} 
          style={{backgroundColor : (props.mode === "dark") ? "#042743" : "white", 
          color: (props.mode === "dark" )? "white" : "#042743"}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearTextClick}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
      </div>
      <div className="container my-3" style={{color: (props.mode === "dark" )? "white" : "#042743"}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{(1/125) * text.split(" ").length} minutes it will take to read {text.split(" ").length} words</p>
        <h2 className='my-2'>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your content in the above text box to preview it here"}</p>
      </div>
    </>
  )
}
