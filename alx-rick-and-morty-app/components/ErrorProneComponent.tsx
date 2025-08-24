import React, { useState } from 'react';

const ErrorProneComponent = () => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    // This error will be caught by the ErrorBoundary
    throw new Error('This is a test error from ErrorProneComponent');
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h3>Error Prone Component</h3>
      <p>Click the button below to trigger an error</p>
      <button 
        onClick={() => setShouldThrow(true)}
        style={{
          padding: '8px 16px',
          backgroundColor: '#ff4d4f',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Trigger Error
      </button>
    </div>
  );
};

export default ErrorProneComponent;
