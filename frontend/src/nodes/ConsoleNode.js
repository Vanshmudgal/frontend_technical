import { BaseNode } from './BaseNode';
import { Position } from 'reactflow';

export const ConsoleNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Console Log"
      handles={[
        { type: 'target', position: Position.Left, id: 'input' }
      ]}
    >
      <div>Logs input to console</div>
    </BaseNode>
  );
};