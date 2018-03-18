import React,{Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'


import Navbars from './Navbar'
import SearchBar from './SearchBar'
import Statistics from './Statistics'

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
                        <SearchBar />
                        <Statistics />
                        {/* <Route exact path="/" component={Landing} /> */}
                    </div>
            </BrowserRouter>
            </div>
        )
    }
}

export default App;