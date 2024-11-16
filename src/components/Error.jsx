import React from 'react';

const Error = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0000',
    color: '#ffffff',
    height: '100vh',
    textAlign: 'center',
  };

  const faceStyle = {
    fontSize: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const eyesStyle = {
    position: 'relative',
    width: '20px',
    height: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    margin: '0 20px',
  };

  const pupilStyle = {
    width: '10px',
    height: '10px',
    backgroundColor: '#000000',
    borderRadius: '50%',
    position: 'absolute',
    top: '5px',
    left: '5px',
  };

  const mouthStyle = {
    width: '40px',
    height: '5px',
    backgroundColor: '#400000',
    borderRadius: '10px',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <div style={faceStyle}>
        <div style={eyesStyle}>
          <div style={pupilStyle}></div>
        </div>
        <div style={mouthStyle}></div>
        <div style={eyesStyle}>
          <div style={pupilStyle}></div>
        </div>
      </div>
      <p>Sorry, ur URL is Broken.<br />!</p>
    </div>
  );
};

export default Error;
