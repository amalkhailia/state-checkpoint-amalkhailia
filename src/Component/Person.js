import React from 'react'
import FullName from "./FullName"
import Profession from "./Profession"
import Bio from "./Bio"
import './Person.css'


class Person extends React.Component {
    state = {
        timer: 0,
        interval:null
      }
      componentDidMount(){this.setState({
          interval:setInterval(()=>{
              this.setState({timer:this.state.timer + 1});
          },1000)
      })
    }
      componentWillUnmount(){
          clearInterval(this.state.interval)
      }
    render() {
    return (
        <div className="Profile">
            <div className="Card">
            <FullName name ="Khailia Amal">
            <div className="upper-container">
           <div className="image-container">  
            <img src="../amal.jpg" alt="amal" />
           </div>
          </div>
            </FullName>
            <Profession profession=" JavaScript developer"/>
            <Bio mybio ="  I am 25 years old I was a student at ISET Bizerte, 
             I did an Applied bachelor's degree in computer technology.
            I have a professional experience of one year. 
            I like reading and development"
            />
            <h2 className="timer">{this.state.timer}</h2>

        </div>

        </div>
    )
}}

export default Person
