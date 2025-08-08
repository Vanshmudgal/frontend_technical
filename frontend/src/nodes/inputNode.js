// InputNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  return (
    <BaseNode
      id={id}
      title="Input Node"
      handles={[
        { 
          type: 'source', 
          position: Position.Right, 
          id: 'value',
          style: {
            width: '12px',
            height: '12px',
            backgroundColor: '#BC7DFF',
            border: '2px solid white',
            borderRadius: '50%'
          }
        },
        { 
          type: 'target', 
          position: Position.Left, 
          id: 'input',
          style: {
            width: '12px',
            height: '12px',
            backgroundColor: '#BC7DFF',
            border: '2px solid white',
            borderRadius: '50%'
          }
        }
      ]}
      style={{
        width: '256px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        overflow: 'hidden',
         border: '1px solid rgba(0, 0, 0, 0.1)'
      }}
      headerStyle={{
        backgroundColor: '#BC7DFF',
        padding: '16px',
      }}
      contentStyle={{
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}
      headerContent={
        <h3 style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: '14px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>Input</h3>
      }
    >
      <div>
        <label style={{
          display: 'block',
          fontSize: '12px',
          color: '#374151',
          marginBottom: '4px'
        }}>Name</label>
        <input
          type="text"
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          style={{
            width: '100%',
            padding: '8px 12px',
            backgroundColor: 'white',
            border: '1px solid #D1D5DB',
            borderRadius: '8px',
            color: '#1F2937',
            fontSize: '14px',
            outline: 'none',
            focus: {
              ring: '2px solid #BC7DFF'
            }
          }}
        />
      </div>
      <div>
        <label style={{
          display: 'block',
          fontSize: '12px',
          color: '#374151',
          marginBottom: '4px'
        }}>Type</label>
        <select
          value={inputType}
          onChange={(e) => setInputType(e.target.value)}
          style={{
            width: '100%',
            padding: '8px 12px',
            backgroundColor: 'white',
            border: '1px solid #D1D5DB',
            borderRadius: '8px',
            color: '#1F2937',
            fontSize: '14px',
            outline: 'none',
            focus: {
              ring: '2px solid #BC7DFF'
            }
          }}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
          <option value="Number">Number</option>
          <option value="Boolean">Boolean</option>
        </select>
      </div>
    </BaseNode>
  );
};