// frontend/src/draggableNode.js
import React from 'react';

const DraggableNode = ({ type, label }) => {
    const nodeColors = {
        customInput: '#44098D',
        llm: '#44098D',
        customOutput: '#44098D',
        text: '#44098D',
        number: '#44098D',
        conditional: '#44098D',
        timer: '#44098D',
        math:  '#44098D',
        console: '#44098D'
    };

    const onDragStart = (event, nodeType) => {
        event.target.style.opacity = '0.7';
        event.dataTransfer.setData('application/reactflow', JSON.stringify({ nodeType }));
        event.dataTransfer.effectAllowed = 'move';
    };

    const onDragEnd = (event) => {
        event.target.style.opacity = '1';
    };

    return (
        <div
            className={type}
            onDragStart={(event) => onDragStart(event, type)}
            onDragEnd={onDragEnd}
            style={{ 
                cursor: 'grab',
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: nodeColors[type] || '#1C2536',
                color: '#FFFFFF',
                fontWeight: 'bold',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'all 0.2s ease',
                ':hover': {
                    transform: 'translateY(-2px)'
                }
            }}
            draggable
        >
            {label}
        </div>
    );
};

// Make sure to export the component
export default DraggableNode;