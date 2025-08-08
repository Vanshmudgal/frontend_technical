import { useState } from 'react';
import { BaseNode, NodeInput } from './BaseNode';
import { Position } from 'reactflow';

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');

  return (
    <BaseNode
      id={id}
      title="Math Operation"
      style={{
        width: '256px',
        backgroundColor: 'white',
        borderRadius: '12px',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}
      headerStyle={{
        backgroundColor: '#BC7DFF',
        padding: '16px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '14px',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}
      contentStyle={{
        padding: '16px'
      }}
      handles={[
        { 
          type: 'target', 
          position: Position.Left, 
          id: 'a',
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
          id: 'b',
          style: {
            width: '12px',
            height: '12px',
            backgroundColor: '#BC7DFF',
            border: '2px solid white',
            borderRadius: '50%'
          }
        },
        { 
          type: 'source', 
          position: Position.Right, 
          id: 'result',
          style: {
            width: '12px',
            height: '12px',
            backgroundColor: '#BC7DFF',
            border: '2px solid white',
            borderRadius: '50%'
          }
        }
      ]}
    >
      <NodeInput
        label="Operation"
        type="select"
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        options={[
          { value: 'add', label: 'Add' },
          { value: 'subtract', label: 'Subtract' },
          { value: 'multiply', label: 'Multiply' },
          { value: 'divide', label: 'Divide' }
        ]}
        style={{
          marginBottom: '16px'
        }}
        labelStyle={{
          display: 'block',
          fontSize: '12px',
          color: '#374151',
          marginBottom: '4px'
        }}
        selectStyle={{
          width: '100%',
          padding: '8px 12px',
          backgroundColor: 'white',
          border: '1px solid transperent',
          borderRadius: '8px',
          color: '#1F2937',
          fontSize: '14px',
          outline: 'none'
        }}
      />
    </BaseNode>
  );
};