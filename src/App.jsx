import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import NotesPackage from './Components/NotesPackage';

function App() {
  return (
    <>
      <Header title="Tiny Notes"/>
      {/* <Sidebar /> */}
      <NotesPackage />
    </>
  );
}

export default App;
