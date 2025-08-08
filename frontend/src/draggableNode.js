// frontend/src/draggableNode.js
import React from 'react';

const DraggableNode = ({ type, label }) => {
    const nodeColors = {
        customInput: '#68D391',
        llm: '#F6AD55',
        customOutput: '#F687B3',
        text: '#63B3ED',
        number: '#81E6D9',
        conditional: '#D6BCFA',
        timer: '#FEB2B2',
        math: '#FEEBC8',
        console: '#BEE3F8'
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
                color: '#1A202C',
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