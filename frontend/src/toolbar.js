// frontend/src/toolbar.js
import DraggableNode from './draggableNode'; // Changed from named import to default import

export const PipelineToolbar = () => {
    const nodeTypes = [
        { type: 'customInput', label: 'Input' },
        { type: 'llm', label: 'LLM' },
        { type: 'customOutput', label: 'Output' },
        { type: 'text', label: 'Text' },
        { type: 'number', label: 'Number' },
        { type: 'conditional', label: 'Conditional' },
        { type: 'timer', label: 'Timer' },
        { type: 'math', label: 'Math' },
        { type: 'console', label: 'Console' }
    ];

    return (
        <div style={{ padding: '10px', backgroundColor: '#1A202C' }}>
            <h3 style={{ color: '#fff', marginBottom: '15px' }}>Nodes</h3>
            <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                gap: '10px'
            }}>
                {nodeTypes.map((node) => (
                    <DraggableNode 
                        key={node.type}
                        type={node.type} 
                        label={node.label} 
                    />
                ))}
            </div>
        </div>
    );
};