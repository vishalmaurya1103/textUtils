import React , {useState} from "react";

export default function TextForm(props) {

  const [text, setText] = useState("");
    
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase','success')
  };

  const handleLoClick = () => { 
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase','success')
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Text cleared!','success')
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox") ;
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert('Copied to clipboard','success')
  }

    const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Extra spaces removed','success')
    }

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb--3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'black':'white' , color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className= "btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className= "btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className= "btn btn-primary my-3 mx-1" onClick={handleClearClick}>Clear the Text</button>
      <button disabled={text.length===0} className= "btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy the Text</button>
      <button disabled={text.length===0} className= "btn btn-primary my-3 mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
        <p> {0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
}
