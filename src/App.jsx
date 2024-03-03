import { useEffect, useRef, useState } from 'react';
import './App.css';
import { marked } from 'marked';

// handles line breaks
marked.use({
  breaks: true,
  gfm: true,
});

const defaultInputText = `![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  # Hi!! \n## This markdown previewer let's you preview markdown in HTML format.
 

  > **Use the following cheatSheet to write your own markdown text**\n

  | Markdown Syntax | HTML Element   |
  |-----------------|----------------|
  | \`#\`             | \`<h1>\`         |
  | \`##\`            | \`<h2>\`         |
  | \`###\`           | \`<h3>\`         |
  | \`####\`          | \`<h4>\`         |
  | \`#####\`         | \`<h5>\`         |
  | \`######\`        | \`<h6>\`         |
  | \`*\` or \`_\`      | \`<em>\`         |
  | \`**\` or \`__\`    | \`<strong>\`     |
  | \`-\`             | \`<ul>\`         |
  | \`1.\`            | \`<ol>\`         |
  | \` \`\` \`         | \`<code>\`       |
  | \`\`\`\` \`\`\` \`\`\`\`   | \`<pre>\`        |
  | \`---\` or \`***\`  | \`<hr>\`         |
  | \`[link](url)\`   | \`<a href="url">link</a>\` |
  | \`![alt](url)\`   | \`<img src="url" alt="alt">\` |
  | \`> text\`        | \`<blockquote>text</blockquote>\` |


You can use backticks to add inline code - \`<div></div>\`

  This is a code block-
  \`\`\`js
    function() {
      console.log('Hello World');
    }
  \`\`\`
  Read about [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) in JavaScript.

Add list using using **-**

- item 1
- item 2

`;

function App() {
  const [activeTab, setActiveTab] = useState('editor');
  const [input, setInput] = useState(defaultInputText);
  const previewRef = useRef(null);

  useEffect(() => {
    previewRef.current.innerHTML = marked.parse(input);
  }, [input]);

  return (
    <main className="container min-vh-100">
      <div className="row pt-4">
        <div className="col d-grid">
          <button
            type="button"
            className={
              activeTab.includes('editor')
                ? 'btn btn-primary'
                : 'btn btn-secondary'
            }
            id="editor-btn"
            onClick={() => {
              setActiveTab('editor');
            }}
          >
            Editor
          </button>
        </div>
        <div className="col d-grid">
          <button
            type="button"
            className={
              activeTab.includes('preview')
                ? 'btn btn-primary'
                : 'btn btn-secondary'
            }
            id="preview-btn"
            onClick={() => {
              setActiveTab('preview');
            }}
          >
            Preview
          </button>
        </div>
      </div>
      <div className="row display-area mx-2 mx-md-0 mt-4">
        <textarea
          id="editor"
          defaultValue={input}
          onChange={(e) => {
            setInput(() => e.target.value);
          }}
          className={
            activeTab === 'editor' ? 'editor-window' : 'editor-window hidden'
          }
        ></textarea>
        <div
          id="preview"
          ref={previewRef}
          className={
            activeTab === 'preview' ? 'preview-window' : 'preview-window hidden'
          }
        ></div>
      </div>
    </main>
  );
}

export default App;
