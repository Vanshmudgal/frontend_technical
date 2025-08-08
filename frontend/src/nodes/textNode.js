import { useState, useEffect } from 'react';
import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [content, setContent] = useState(data?.content || '');
  const [variables, setVariables] = useState([]);
  const [showVarBox, setShowVarBox] = useState(false);

  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][0-9a-zA-Z_$]*)\s*\}\}/g;
    const matches = [];
    let match;

    while ((match = regex.exec(content)) !== null) {
      matches.push(match[1]);
    }

    const uniqueVars = [...new Set(matches)];
    setVariables(uniqueVars);
    setShowVarBox(uniqueVars.length > 0);
  }, [content]);

  const generateHandles = () => {
    const defaultHandles = [
      { 
        type: 'source', 
        position: Position.Right, 
        id: 'output',
        style: {
          width: '12px',
          height: '12px',
          backgroundColor: '#BC7DFF', // Purple
          border: '2px solid white',
          borderRadius: '50%'
        }
      },
      // New default left handle (always present)
      { 
        type: 'target', 
        position: Position.Left, 
        id: 'input',
        style: {
          width: '12px',
          height: '12px',
          backgroundColor: '#BC7DFF', // Purple
          border: '2px solid white',
          borderRadius: '50%'
        }
      }
    ];

    const inputHandles = variables.map((varName) => ({
      type: 'target',
      position: Position.Left,
      id: varName,
      label: varName,
      style: {
        width: '12px',
        height: '12px',
        backgroundColor: '#BC7DFF', // Purple
        border: '2px solid white',
        borderRadius: '50%'
      }
    }));

    return [...inputHandles, ...defaultHandles];
  };

  return (
    <div style={{ display: 'flex' }}>
      {showVarBox && (
        <div
          style={{
            width: '140px',
            marginRight: '12px',
            padding: '12px',
            backgroundColor: '#f0f7ff',
            borderRadius: '8px',
            border: '1px solid #cce0ff',
            boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
            fontFamily: 'sans-serif'
          }}
        >
          <h4
            style={{
              marginBottom: '10px',
              color: '#1a73e8',
              backgroundColor: '#f0f7ff',
              fontSize: '14px',
              fontWeight: 600
            }}
          >
            Detected Variables
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {variables.map((varName) => (
              <div
                key={varName}
                style={{
                  padding: '4px 8px',
                  backgroundColor: '#e1ecff',
                  borderRadius: '4px',
                  color: '#0d47a1',
                  fontSize: '12px',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {varName}
              </div>
            ))}
          </div>
        </div>
      )}

      <BaseNode
        id={id}
        title="Text"
        handles={generateHandles()}
        style={{
          minWidth: '320px',
          backgroundColor: '#ffffff',
          border: '1px solid #e5e7eb',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
          fontFamily: 'sans-serif'
        }}
        titleStyle={{
          backgroundColor: '#BC7DFF',
          color: '#000',
          padding: '8px 12px',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          fontWeight: 600,
          fontSize: '14px'
        }}
      >
        <label
          style={{
            fontSize: '13px',
            fontWeight: '600',
            marginBottom: '8px',
            color: '#333',
            display: 'block'
          }}
        >
          Text Content
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            width: '100%',
            minHeight: '100px',
            padding: '10px',
            borderRadius: '6px',
            border: '1px solid #d1d5db',
            resize: 'vertical',
            color: '#202124',
            fontSize: '14px',
            backgroundColor: '#fff',
            outline: 'none'
          }}
          placeholder="Enter text with {{variables}}..."
        />
      </BaseNode>
    </div>
  );
};