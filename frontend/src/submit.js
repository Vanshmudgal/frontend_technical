import axios from 'axios';
import { useStore } from './store'; // Import your Zustand store

export const SubmitButton = () => {
  const handleSubmit = async () => {
    try {
      // 1. Get current nodes and edges from the store
      const { nodes, edges } = useStore.getState();
      
      // 2. Make POST request to backend
      const response = await axios.post('http://localhost:8000/pipelines/parse', {
        nodes,
        edges
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // 3. Handle successful response
      const { num_nodes, num_edges, is_dag } = response.data;
      alert(`Pipeline Analysis:\n\n• Nodes: ${num_nodes}\n• Edges: ${num_edges}\n• Valid DAG: ${is_dag ? '✅ Yes' : '❌ No'}`);
      
    } catch (error) {
      // 4. Handle errors
      console.error('Submission error:', error);
      
      if (error.response) {
        // Server responded with error status
        alert(`Error ${error.response.status}: ${error.response.data?.detail || 'Unknown error'}`);
      } else if (error.request) {
        // No response received
        alert('Backend not responding. Is the server running?');
      } else {
        // Other errors
        alert('Submission failed: ' + error.message);
      }
    }
  };

  return (
    <div style={{
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '16px 0'
    }}>
      <button 
        onClick={handleSubmit}  // Changed from type="submit" to onClick
        style={{
          backgroundColor: '#7C3AED',
          color: 'white',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          ':hover': {
            backgroundColor: '#6D28D9',
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          },
          ':active': {
            transform: 'translateY(0)',
            boxShadow: '0 2px 3px rgba(0, 0, 0, 0.1)'
          },
          ':focus': {
            outline: 'none',
            boxShadow: '0 0 0 3px rgba(124, 58, 237, 0.3)'
          }
        }}
      >
        Submit Pipeline
      </button>
    </div>
  );
};