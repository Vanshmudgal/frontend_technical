import { useState } from 'react';
import { BaseNode, NodeInput } from './BaseNode';
import { Position } from 'reactflow';

export const NumberNode = ({ id, data }) => {
  const [value, setValue] = useState(data?.value || 0);

  return (
    <BaseNode
      id={id}
      title="Number"
      style={{
        width: '200px',
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid #E5E7EB',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}
      headerStyle={{
        backgroundColor: '#4F46E5',
        padding: '12px 16px',
        color: 'white',
        fontWeight: '600',
        fontSize: '14px'
      }}
      contentStyle={{
        padding: '16px'
      }}
      handles={[
        { 
          type: 'target',  // Left handle for input
          position: Position.Left, 
          id: 'input',
          style: {
            width: '12px',
            height: '12px',
            backgroundColor: '#BC7DFF', // Same purple as right handle
            border: '2px solid white',
            borderRadius: '50%'
          }
        },
        { 
          type: 'source',  // Right handle for output
          position: Position.Right, 
          id: 'value',
          style: {
            width: '12px',
            height: '12px',
            backgroundColor: '#BC7DFF', // Existing purple
            border: '2px solid white',
            borderRadius: '50%'
          }
        }
      ]}
    >
      <NodeInput 
        label="Value"
        labelStyle={{
          display: 'block',
          fontSize: '12px',
          color: '#6B7280',
          marginBottom: '8px',
          fontWeight: '500'
        }}
        inputStyle={{
          width: '100%',
          padding: '8px 12px',
          backgroundColor: 'white',
          border: '1px solid #E5E7EB',
          borderRadius: '6px',
          color: '#111827',
          fontSize: '14px',
          outline: 'none',
          transition: 'border-color 0.2s',
          boxSizing: 'border-box'
        }}
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        type="number"
      />
    </BaseNode>
  );
};