import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Main, Button, Tabs } from '@aragon/ui'
import Navbar from  './components/navbar'
import Lock from './components/lockCard'
import Claim from './components/claimList'


function App() {

  const [selected, setSelected] = useState(0)

  const Display = () => {
    if(selected === 0) {
      return <Lock/>
    }
    else {

        return <Claim/>
    }
  }
  

  return (
      <Main >
        <Navbar/>
        <div className="tabs">

        <Tabs
      items={['Lock Token', 'Claim Token']}
      selected={selected}
      onChange={setSelected}
    />
        </div>
        <div>
          <Display/>

        </div>
          <Button>hello</Button>
      </Main>
  );
}

export default App;
