import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout, Header } from './Layout.components';
import CardTable from './CardTable';

function App() {
  return (
    <div className="App">
      <Header> 
        This is a card game!
      </Header>
      <Layout>
        <CardTable/>
      </Layout>
    </div>
  );
}

export default App;
