import React from 'react'
import ReactDOM from 'react-dom'
class Hello extends React.Component{
    constructor(props){
        super(props)
        this.state ={
        }
    }
    getState = () => {
        return (
            <div className="header">
            hello i am header
            </div>
        )
        
    }
    render(){
        return (
            <div>
             {this.getState()}
            </div>    
        )
    }
}

export default Hello