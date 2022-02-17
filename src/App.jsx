import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import MainApp from './Components/MainApp';

function App() {
  return (
    <>
      <Header title="Tiny Notes"/>
      {/* <Sidebar /> */}
      <MainApp />
    </>
  );
}

export default App;
