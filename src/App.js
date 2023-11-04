import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputString, setInputString] = useState('');
  const [cameras, setCameras] = useState([]);

  const handleInput = (e) => {
    setInputString(e.target.value);
  };

  const handleAddCamera = () => {
    setCameras([...cameras, { inputString, capturing: false }]);
    setInputString('');
  };

  const handleCapture = (index) => {
    const updatedCameras = [...cameras];
    updatedCameras[index].capturing = true;
    setCameras(updatedCameras);
  };

  const handleStop = (index) => {
    const updatedCameras = [...cameras];
    updatedCameras[index].capturing = false;
    setCameras(updatedCameras);
  };

  const handleRemove = (index) => {
    const updatedCameras = [...cameras];
    updatedCameras.splice(index, 1); 
    setCameras(updatedCameras);
  };

  return (
    <div className='outer-container'>
      <input
      className='input-field'
        type="text"
        placeholder="Enter image URL"
        value={inputString}
        onChange={handleInput}
      />
      <button onClick={handleAddCamera}>Add Camera</button>
      <div className="cameras">
        {cameras.map((camera, index) => (
          <div key={index} className="camera">
            <img
              src={camera.inputString + (camera.capturing ? '/capture' : '/stop')}
              alt="Camera"
            />
            <button
              onClick={() => handleCapture(index)}
              disabled={camera.capturing} 
            >
              Start
            </button>
            <button
              onClick={() => handleStop(index)}
              disabled={!camera.capturing} 
            >
              Stop
            </button>
            <button
              onClick={() => handleRemove(index)}
              disabled={camera.capturing} 
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
