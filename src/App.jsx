import React from 'react';
import './App.css';  // Importing a CSS file for styling
import NavCom from './component/navCom'; // Importing the 'navCom' component
import SlideCom from './component/slideCom';
import ContentCom from './component/contentCom';
import ContentCom2 from './component/contentCom2';
import ContentCom3 from './component/contentCom3';
import ContentCom4 from './component/contentCom4';
import ContentCom5 from './component/contentCom5';
import ContentCom6 from './component/contentCom6';
import MainFooter from './component/MainFooter';

// Defining the main functional component named 'App'
function App() {
  return (
    <div className="">
      <NavCom></NavCom>
      <SlideCom></SlideCom>
      <ContentCom></ContentCom>
      <ContentCom2></ContentCom2>
      <ContentCom3></ContentCom3>
      <ContentCom4></ContentCom4>
      <ContentCom5></ContentCom5>
      <ContentCom6></ContentCom6>
      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
