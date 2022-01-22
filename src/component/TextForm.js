import React, { useState } from 'react';



export default function TextForm(props) {
    //this function is convert to upper case
    const handleUpClick = () => {
        console.log('UpperCase was clicked' + text);
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case", "success")

    }
    //this function will convert to lower case
    const handleUpClick1 = () => {
        console.log('Lower case was clicked');
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success");
    }
    const clearText = () => {
   
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "danger");
    }

    //this is the handle onchange function
    const handleOnChange = (event) => {
        console.log("OnChange");
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard", "success")
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "success");
    }

   

    //below are the hooks concept of the react
    const [text, setText] = useState('');
    // text = "new Text"; //this is the wrong way to change the state value

    return (
        <>
            <div className='container my-3'>

                <div className="mb-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
                    <h1>{props.heading}</h1>

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey' : 'white', color: props.mode === 'dark'? 'white' : 'black'}} id="myBox" rows="8"></textarea>
                </div>
                <div className="container">
                    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
                    <button className="btn btn-primary mx-2" onClick={handleUpClick1}>Convert to Lower Case</button>
                    <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Extra Spaces Removes</button>
                   

                </div>
            </div>
            <div className="container my-2" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
                <h1>Your Text summery</h1>
                <p>{text.split(" ").length} Wordsand {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter Something in the textbox above to Preview it here"}</p>
            </div>
        </>
    )
}
