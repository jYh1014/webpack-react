import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/Hello'
class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="container"> I am react app!!</div>
                <Hello />
            </div>
        )
    }
}


// export default App
export default App
