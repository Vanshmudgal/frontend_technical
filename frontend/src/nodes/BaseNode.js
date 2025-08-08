// frontend/src/nodes/BaseNode.js
import { Handle, Position } from 'reactflow';

const nodeStyles = {
  base: {
    width: 200,
    minHeight: 80,
    border: '1px solid #1C2536',
    borderRadius: '8px',
    padding: '12px',
    backgroundColor: '#2D3748',
    color: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
  header: {
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#63B3ED',
    fontSize: '14px'
  }
};

export const BaseNode = ({
  id,
  title,
  handles = [{
    type : 'source',
    position : Position.Right,
    id : 'output'
  }],
  children,
  width = nodeStyles.base.width,
  height = nodeStyles.base.minHeight,
  className = '',
  style = {}
}) => {
  const mergedStyles = {
    ...nodeStyles.base,
    width,
    minHeight: height,
    ...style
  };

  return (
    <div className={`base-node ${className}`} style={mergedStyles}>
      <div style={nodeStyles.header}>{title}</div>
      <div className="node-content">
        {children}
      </div>
      {handles.map(handle => (
        <Handle
          key={`${id}-${handle.id}`}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={{
            backgroundColor: '#63B3ED',
            width: '10px',
            height: '10px',
            ...handle.style
          }}
        />
      ))}
    </div>
  );
};

export const NodeInput = ({ label, value, onChange, type = 'text', options }) => {
  const inputStyle = {
    display: 'block',
    margin: '8px 0',
    fontSize: '12px'
  };

  const inputElementStyle = {
    marginLeft: '8px',
    padding: '4px',
    borderRadius: '4px',
    border: '1px solid #4A5568',
    backgroundColor: '#1A202C',
    color: '#fff'
  };

  if (type === 'select') {
    return (
      <label style={inputStyle}>
        {label}:
        <select 
          value={value} 
          onChange={onChange} 
          style={inputElementStyle}
        >
          {options.map(option => (
            <option 
              key={option.value} 
              value={option.value}
              style={{ backgroundColor: '#2D3748' }}
            >
              {option.label}
            </option>
          ))}
        </select>
      </label>
    );
  }

  return (
    <label style={inputStyle}>
      {label}:
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={inputElementStyle}
      />
    </label>
  );
};