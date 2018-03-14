import React,{Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'


import Navbars from './Navbar'

class App extends Component{
    componentDidMount(){
        //this.props.fetchUser();
    }

    render() {
        return(
            <div className="container">
            <BrowserRouter>
                    <div>
                        <Navbars />
                        {/* <Route exact path="/" component={Landing} /> */}
                    </div>
            </BrowserRouter>
            </div>
        )
    }
}

export default App;