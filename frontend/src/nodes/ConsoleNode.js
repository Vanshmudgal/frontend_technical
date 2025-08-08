import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const ConsoleNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Console Log"
      style={{
        width: 'auto',
        minWidth: '200px',
        backgroundColor: 'transparent',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px'
      }}
      contentStyle={{
        padding: 0
      }}
      handles={[
        { 
          type: 'target', 
          position: Position.Left, 
          id: 'input',
          style: {
            width: '12px',
            height: '12px',
            backgroundColor: '#BC7DFF', // purple-600
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
            backgroundColor: '#BC7DFF', // Matching purple
            border: '2px solid white',
            borderRadius: '50%'
          }
        }
      ]}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: '12px',
          borderRadius: '0 0 8px 8px',
          fontSize: '15px',
          fontWeight: 500,
          color: '#1F2937',
          borderTop: '1px solid #E5E7EB'
        }}
      >
        Logs input to console
      </div>
    </BaseNode>
  );
};