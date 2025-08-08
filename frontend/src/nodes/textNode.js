// frontend/src/nodes/TextNode.js
import { useState, useEffect } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [content, setContent] = useState(data?.content || '');
  const [variables, setVariables] = useState([]);
  const [showVarBox, setShowVarBox] = useState(false);

  // Extract variables from content whenever it changes
  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][0-9a-zA-Z_$]*)\s*\}\}/g;
    const matches = [];
    let match;
    
    while ((match = regex.exec(content)) !== null) {
      matches.push(match[1]);
    }
    
    // Remove duplicates
    //some changes
    //nsi
    const uniqueVars = [...new Set(matches)];
    setVariables(uniqueVars);
    setShowVarBox(uniqueVars.length > 0);
  }, [content]);

  // Generate handles based on detected variables
  const generateHandles = () => {
    const defaultHandles = [
      { type: 'source', position: Position.Right, id: 'output' }
    ];
    
    const inputHandles = variables.map(varName => ({
      type: 'target',
      position: Position.Left,
      id: varName,
      label: varName
    }));
    
    return [...inputHandles, ...defaultHandles];
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Variables Box - appears only when variables are detected */}
      {showVarBox && (
        <div style={{
          width: '120px',
          marginRight: '10px',
          padding: '10px',
          backgroundColor: '#f0f7ff',
          borderRadius: '8px',
          border: '1px solid #cce0ff',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h4 style={{ 
            margin: '0 0 8px 0',
            color: '#1a73e8',
            fontSize: '14px'
          }}>
            Detected Variables
          </h4>
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}>
            {variables.map(varName => (
              <div key={varName} style={{
                padding: '4px 6px',
                backgroundColor: '#e1ecff',
                borderRadius: '4px',
                color: '#0d47a1',
                fontSize: '12px',
                fontWeight: '500'
              }}>
                {varName}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Text Node */}
      <BaseNode
        id={id}
        title="Text"
        handles={generateHandles()}
        style={{ 
          minWidth: '300px',
          flexGrow: 1 
        }}
      >
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            width: '100%',
            minHeight: '100px',
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #dfe1e5',
            resize: 'vertical',
            color: '#202124',
            fontSize: '14px',
            backgroundColor: '#fff'
          }}
          placeholder="Enter text with {{variables}}..."
        />
      </BaseNode>
    </div>
  );
};