import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <div style={{ position: 'relative' }}>
      <BaseNode
        id={id}
        title="LLM Node"
        handles={[
          { 
            type: 'target', 
            position: Position.Left, 
            id: 'input',
            style: { 
              width: '12px',
              height: '12px',
              backgroundColor: '#7C3AED', // purple-600
              border: '2px solid white',
              borderRadius: '50%'
            }
          },
          { 
            type: 'source', 
            position: Position.Right, 
            id: 'response',
            style: { 
              width: '12px',
              height: '12px',
              backgroundColor: '#BC7DFF', // purple-400
              border: '2px solid white',
              borderRadius: '50%'
            }
          }
        ]}
        style={{
          width: '256px',
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '1px solid #D1D5DB', // gray-300
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden'
        }}
        headerStyle={{
          backgroundColor: '#F3F4F6', // gray-100
          padding: '16px 20px',
        }}
        contentStyle={{
          padding: '16px',
          backgroundColor: 'white'
        }}
        headerContent={
          <h3 style={{
            color: '#1F2937', // gray-800
            fontWeight: 600,
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            LLM Processor
          </h3>
        }
      >
        <p style={{
          fontSize: '14px',
          color: '#374151' // gray-700
        }}>
          Large Language Model
        </p>
      </BaseNode>
    </div>
  );
};