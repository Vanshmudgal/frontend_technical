import { BaseNode, NodeInput } from './BaseNode';
import { Position } from 'reactflow';
import { useState } from 'react';

export const ConditionalNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'a > b');

  return (
    <BaseNode
      id={id}
      title="Conditional"
      style={{
        width: '240px',
        backgroundColor: '#FFFFFF',
        borderRadius: '8px',
        border: '1px solid #E5E7EB',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}
      headerStyle={{
        backgroundColor: '#3B82F6',
        padding: '10px 14px',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: '13px',
        textTransform: 'uppercase'
      }}
      contentStyle={{
        padding: '14px',
        backgroundColor: '#FFFFFF'
      }}
      handles={[
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
        },
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
        }
      ]}
    >
      <NodeInput 
        label="Condition"
        labelStyle={{
          display: 'block',
          fontSize: '12px',
          color: '#4B5563',
          marginBottom: '6px',
          fontWeight: '500'
        }}
        inputStyle={{
          width: '100%',
          padding: '6px 10px',
          backgroundColor: '#FFFFFF',
          border: '1px solid #D1D5DB',
          borderRadius: '4px',
          color: '#111827',
          fontSize: '13px',
          outline: 'none',
          transition: 'all 0.2s',
          ':focus': {
            borderColor: '#3B82F6',
            boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.2)'
          }
        }}
        value={condition} 
        onChange={(e) => setCondition(e.target.value)} 
      />
    </BaseNode>
  );
};