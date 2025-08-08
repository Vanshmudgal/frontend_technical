import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  return (
    <div style={{
      width: '220px',
      backgroundColor: '#FFFFFF',
      borderRadius: '8px',
      border: '1px solid #E5E7EB',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* LEFT HANDLE (TARGET - GREEN) */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input`}
        style={{
          width: '12px',
          height: '12px',
          backgroundColor: '#BC7DFF', // Keep green
          border: '2px solid #FFFFFF',
          borderRadius: '50%'
        }}
      />
      
      {/* NEW RIGHT HANDLE (SOURCE - PURPLE) */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          width: '12px',
          height: '12px',
          backgroundColor: '#BC7DFF', 
          border: '2px solid #FFFFFF',
          borderRadius: '50%'
        }}
      />
      
      {/* HEADER */}
      <div style={{
        backgroundColor: '#FFFFFF',
        padding: '8px 12px',
        color: '#ACC3EE',
        fontWeight: '600',
        fontSize: '14px',
        borderBottom: '1px solid #E5E7EB'
      }}>
        Output
      </div>
      
      {/* CONTENT */}
      <div style={{ padding: '12px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{
            display: 'block',
            fontSize: '12px',
            color: '#6B7280',
            marginBottom: '4px',
            fontWeight: '500'
          }}>
            Name
          </label>
          <input
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            style={{
              width: '100%',
              padding: '6px 8px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '4px',
              fontSize: '13px',
              outline: 'none',
              transition: 'border-color 0.2s',
              ':focus': {
                borderColor: '#10B981',
                boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.2)'
              }
            }}
          />
        </div>
        
        <div>
          <label style={{
            display: 'block',
            fontSize: '12px',
            color: '#6B7280',
            marginBottom: '4px',
            fontWeight: '500'
          }}>
            Type
          </label>
          <select
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
            style={{
              width: '100%',
              padding: '6px 8px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '4px',
              fontSize: '13px',
              outline: 'none',
              transition: 'border-color 0.2s',
              ':focus': {
                borderColor: '#10B981',
                boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.2)'
              }
            }}
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </div>
      </div>
    </div>
  );
};