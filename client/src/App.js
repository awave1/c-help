import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Middle from './components/Middle';
import Footer from './components/Footer';
import './App.css';

// <style>{'body { background-color: lightblue; }'}</style>

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Middle />
        <Footer />
      </Container>
    );
  }
}

export default App;
