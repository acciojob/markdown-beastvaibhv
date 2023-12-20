import React, { useState, useEffect } from 'react';
import "../styles/App.css";

const App = () => {
    const [text, setText] = useState("");
    const [preview, setPreview] = useState("");

    useEffect(() => {
        setPreview(text);
    }, [text])


    return (
        <div >
            <div className='app'>
                <div className='textarea'>
                    <h1>Text Area</h1>
                    <div >
                    <textarea
                        className='textarea'
                        placeholder=''
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                    >#</textarea>
                    </div>
                    
                </div>
                <div className='preview'>
                    <h1>Preview</h1>
                    <div className='loading'>{preview}</div>
                </div>

            </div>

        </div>
    )

}

export default App;
