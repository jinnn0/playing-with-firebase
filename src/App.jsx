import React from 'react';
import { useState } from 'react';
import ImgaeGrid from './components/ImgaeGrid';
import Model from './components/Model';
import Title from './components/Title';
import UploadForm from './components/UploadForm';

function App() {
  const [selectedImg, setSelectedimg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImgaeGrid setSelectedimg={setSelectedimg} />
      {selectedImg && <Model selectedImg={selectedImg} setSelectedimg={setSelectedimg} />}
    </div>
  );
}

export default App;
