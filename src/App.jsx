import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('editor');
  const [input, setInput] = useState('');

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
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className={
            activeTab === 'editor' ? 'editor-window' : 'editor-window hidden'
          }
        >
          {input}
        </textarea>
        <div
          id="preview"
          className={
            activeTab === 'preview' ? 'preview-window' : 'preview-window hidden'
          }
        ></div>
      </div>
    </main>
  );
}

export default App;
