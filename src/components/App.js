import React, { useState, useEffect } from 'react';
import "../styles/App.css";

const App = () => {
    const [markdown, setMarkdown] = useState("");

    const markdownToComponent = (markdown) => {
        const lines = markdown.split('\n');
        const components = [];

        for (const line of lines) {
            if (line.startsWith('# ')) {
                const headingText = line.substring(2); // Extract text after '# '
                components.push(<h1 key={components.length}>{headingText}</h1>);
            } else if (line.startsWith('## ')) {
                const headingText = line.substring(3); // Extract text after '## '
                components.push(<h2 key={components.length}>{headingText}</h2>);
            } else if (line.startsWith('*') && line.endsWith('*')) {
                const italicText = line.substring(1, line.length - 1); // Extract text between '*'
                components.push(<i key={components.length}>{italicText}</i>);
            }else if (line.startsWith('`') && line.endsWith('`')) {
                const StrongText = line.substring(1, line.length - 1); // Extract text between '*'
                components.push(<strong key={components.length}>{StrongText}</strong>);
            } else if (line.startsWith('**') && line.endsWith('**')) {
                const boldText = line.substring(2, line.length - 2); // Extract text between '**'
                components.push(<b key={components.length}>{boldText}</b>);
            } else if (line.startsWith('[') && line.endsWith(')')) {
                const linkText = line.substring(line.lastIndexOf('[') + 1, line.lastIndexOf(']')); // Extract link text
                const linkUrl = line.substring(line.lastIndexOf('(') + 1, line.lastIndexOf(')')); // Extract link URL
                components.push(
                    <a key={components.length} href={linkUrl} target="_blank" rel="noopener noreferrer">
                        {linkText}
                    </a>
                );
            } else if (line.startsWith('`') && line.endsWith('`')) {
                const codeText = line.substring(1, line.length - 1); // Extract text between '`'s
                components.push(<code key={components.length}>{codeText}</code>);
            } else if (line.startsWith('> ')) {
                const blockquoteText = line.substring(2); // Extract text after '> '
                components.push(<blockquote key={components.length}>{blockquoteText}</blockquote>);
            } else if (line.startsWith('- ')) {
                const listItemText = line.substring(2); // Extract text after '- '
                components.push(
                    <ul key={components.length}>
                        <li>{listItemText}</li>
                    </ul>
                );
            } else {
                components.push(<p key={components.length}>{line}</p>);
            }
        }
        return components;
    };

    const renderedComponents = markdownToComponent(markdown);

    return (
        <div className='app'>
            <div className='textarea'>
                <textarea
                    className='textarea'
                    placeholder='Type your markdown here...'
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                ></textarea>
            </div>
            <div className='preview'>
                {renderedComponents[0]}
            </div>
        </div>
    );
};

export default App;
