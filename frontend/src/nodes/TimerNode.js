import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode, NodeInput } from './BaseNode';

export const TimerNode = ({ id, data }) => {
  const [interval, setInterval] = useState(data?.interval || 1000);

  const handleIntervalChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setInterval(Math.max(0, value)); // Ensure it doesn't go negative
    } else {
      setInterval(0);
    }
  };

  

  return (
    <BaseNode
      id={id}
      title="Timer Node"
      style={{
        width: '220px',
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        border: '1px solid #E5E7EB',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}
      headerStyle={{
        backgroundColor: '#8B5CF6',
        padding: '12px 16px',
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: '14px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}
      contentStyle={{
        padding: '16px',
        backgroundColor: '#FFFFFF'
      }}
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: 'trigger',
          style: {
            width: '12px',
            height: '12px',
            backgroundColor: '#BC7DFF',
            border: '2px solid #FFFFFF',
            borderRadius: '50%'
          }
        },
        {
          type: 'source',
          position: Position.Right,
          id: 'tick',
          style: {
            width: '12px',
            height: '12px',
            backgroundColor: '#BC7DFF',
            border: '2px solid #FFFFFF',
            borderRadius: '50%'
          }
        }
      ]}
    >
      <div style={{ position: 'relative' }}>
        <NodeInput
          label="Interval (ms)"
          type="number"
          value={interval}
          onChange={handleIntervalChange}
          labelStyle={{
            display: 'block',
            fontSize: '12px',
            color: '#6B7280',
            marginBottom: '8px',
            fontWeight: '500'
          }}
          inputStyle={{
            width: '100%',
            padding: '8px 40px 8px 12px', // Right padding for buttons
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E7EB',
            borderRadius: '6px',
            color: '#111827',
            fontSize: '14px',
            outline: 'none',
            transition: 'border-color 0.2s',
            ':focus': {
              borderColor: '#8B5CF6',
              boxShadow: '0 0 0 2px rgba(139, 92, 246, 0.2)'
            }
          }}
        />
        <div style={{
          position: 'absolute',
          right: '8px',
          top: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px'
        }}>
        
        </div>
      </div>
    </BaseNode>
  );
};