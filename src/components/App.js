import React, { useState, useEffect } from 'react';
import "../styles/App.css";

const App = () => {
    const [markdown, setMarkdown] = useState("");
    const [preview, setPreview] = useState("");

    useEffect(() => {
        setPreview(markdown);
    }, [markdown])


    return (
        <div >
            <div className='app'>
                <div className='textarea'>
        
                    
                    <textarea
                        className='textarea'
                        placeholder=''
                        value={markdown}
                        onChange={(e)=>setMarkdown(e.target.value)}
                    ></textarea>
                    
                    
                </div>
                <div className='preview'>
            
                    <h1 className='loading'>{preview}</h1>
                </div>

            </div>

        </div>
    )

}

export default App;
