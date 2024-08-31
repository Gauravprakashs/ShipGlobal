import React from 'react';
import Accordion from './Component/accoridan';

function App() {

  const headerStyle = {
    color: 'darkblue',
    fontSize: '3rem',
    textAlign: 'center',
    marginBottom: '20px',
  };

  return (
    <div className="App">
      <h1 style={headerStyle}>ShipGlobal</h1>
      <Accordion title="Home" content="Welecome to our Home Section. Can i take your request 😊" />
      <Accordion title="About Us" content="United by passion, driven by purpose – meet the faces behind our shared vision." />
      <Accordion title="Reach us" content="1404, Road No.6
Mahipalpur, New Delhi 110037, India
support@shipglobal.in | sales@shipglobal.in | 011-42277777" />
    </div>
  );
}

export default App;
