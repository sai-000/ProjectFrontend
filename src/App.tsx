import React from 'react';


import Dummydata from './dummydata';

function App() {
  const data=Dummydata();
  console.log(data);
  return (
    <div className="App">
      <div>Hello data is displayed in the console </div>
    </div>
  );
}

export default App;
