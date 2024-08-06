import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState(''); // Initialize with an empty string
    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    };

    const handleLoCase = () => {
        let newText = text.toLowerCase(); // To convert Lower Case
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    };
    
    const handleClear = () => {
        let newText = "" // To convert Lower Case
        setText(newText);
        props.showAlert("All Text Are Clear", "success");
    };

    const handleCopay = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value)
        props.showAlert("All Text Are Copy to Clipboard", "success");
    }

    const handleExSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove All Extra Space", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    return (
        <>
            <div className="container">
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className="d-flex">
                    <button type="button" className="btn btn-primary mx-2" onClick={handleClear}>Ctear</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={handleUpCase}>ToUppercase</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={handleLoCase}>ToLowercase</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={handleCopay}>Copy Text</button>
                    <button type="button" className="btn btn-primary mx-2" onClick={handleExSpace}>Remove Extra Space</button>
                </div>
            </div>
            <div className="container mt-3">
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((text)=>{return text.length!==0}).length} words and {text.length} characters</p>
                <h4>Preview</h4>
                <p>{text}</p>
            </div>
        </>
    );
}
