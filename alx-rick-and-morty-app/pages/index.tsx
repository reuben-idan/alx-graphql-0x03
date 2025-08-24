import React from 'react';
import ErrorProneComponent from '../components/ErrorProneComponent';

const Home = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Rick and Morty App</h1>
      <p>This is a test page for Error Boundary implementation.</p>
      
      <div style={{ marginTop: '40px' }}>
        <h2>Test Error Boundary</h2>
        <p>Click the button below to trigger an error that will be caught by the ErrorBoundary:</p>
        <ErrorProneComponent />
      </div>
    </div>
  );
};

export default Home;
