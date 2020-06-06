import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



export default class Button extends React.Component {
  
    runParentHandleClick = () =>{
        this.props.handleClick(this.props.name)
    }
  render() {
    return (
      
     <button  id={this.props.id} onClick={this.runParentHandleClick} className={`button ${this.props.class}`}> {this.props.name}</button>
      
    )
  }
}
