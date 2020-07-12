import React from 'react';
import "assets/scss/style.scss";
import Button from 'components/Button/index';

function App() {
  return (
    <div className="App">
      <Button children="Button Biasa" isPrimary={true}/>
      <Button children="Type Link External" type="Link" isExternal={true} isPrimary={true}/>
      <Button children="Type Link Not External" type="Link" isExternal={false} isPrimary={true}/>
    </div>
  );
}

export default App;
