import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Layout, Header } from './Layout.components';

function App() {
  return (
    <div className="App">
      <Header> 
        This is a card game!
      </Header>
      <Layout>
        Hello
      </Layout>
    </div>
  );
}

export default App;
