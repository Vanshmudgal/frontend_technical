// frontend/src/ui.js
import { useState, useRef, useCallback, useMemo } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { InputNode } from './nodes/inputNode';
import { LLMNode } from './nodes/llmNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';
import { NumberNode } from './nodes/NumberNode';
import { ConditionalNode } from './nodes/ConditionalNode';
import { TimerNode } from './nodes/TimerNode';
import { MathNode } from './nodes/MathNode';
import { ConsoleNode } from './nodes/ConsoleNode';

import 'reactflow/dist/style.css';

const gridSize = 20;
const proOptions = { hideAttribution: true };

export const PipelineUI = () => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    
    const {
      nodes,
      edges,
      getNodeID,
      addNode,
      onNodesChange,
      onEdgesChange,
      onConnect
    } = useStore(selector, shallow);

    const nodeTypes = useMemo(() => ({
      customInput: InputNode,
      llm: LLMNode,
      customOutput: OutputNode,
      text: TextNode,
      number: NumberNode,
      conditional: ConditionalNode,
      timer: TimerNode,
      math: MathNode,
      console: ConsoleNode
    }), []);

    const onDrop = useCallback(
        (event) => {
          event.preventDefault();
    
          if (!reactFlowWrapper.current || !reactFlowInstance) return;
          
          const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
          const transferData = event?.dataTransfer?.getData('application/reactflow');
          
          if (transferData) {
            try {
              const appData = JSON.parse(transferData);
              const type = appData?.nodeType;
      
              if (typeof type === 'undefined' || !type) return;
      
              const position = reactFlowInstance.project({
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top,
              });

              const nodeID = getNodeID(type);
              const newNode = {
                id: nodeID,
                type,
                position,
                data: { id: nodeID, nodeType: type },
              };
      
              addNode(newNode);
            } catch (error) {
              console.error('Error processing dropped node:', error);
            }
          }
        },
        [reactFlowInstance, getNodeID, addNode]
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    return (
        <div ref={reactFlowWrapper} style={{ width: '100%', height: '70vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onInit={setReactFlowInstance}
                nodeTypes={nodeTypes}
                proOptions={proOptions}
                snapGrid={[gridSize, gridSize]}
                connectionLineType='smoothstep'
                fitView
            >
                <Background color="#4A5568" gap={gridSize} />
                <Controls style={{ backgroundColor: '#1A202C' }} />
                <MiniMap 
                  style={{ backgroundColor: '#1A202C' }}
                  nodeColor={(node) => {
                    switch (node.type) {
                      case 'customInput': return '#68D391';
                      case 'llm': return '#F6AD55';
                      case 'customOutput': return '#F687B3';
                      default: return '#63B3ED';
                    }
                  }}
                />
            </ReactFlow>
        </div>
    );
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});