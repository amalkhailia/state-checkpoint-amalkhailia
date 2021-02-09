import React, { Component } from 'react'
import Person from './Component/Person'
import { Button } from 'react-bootstrap'
import './App.css';



class App extends React.Component {
  state = {
    show: false
  }

  handleShow = () => {
    this.setState({
      show: !this.state.show
    })
  }


  render() {
    return (
      <div className="App" >
        <Button variant="light"
          onClick={this.handleShow}
          className="toggle">Toggle</Button>
        {this.state.show &&
          <Person/>
        }
      </div>
    );
  }
}

export default App;
