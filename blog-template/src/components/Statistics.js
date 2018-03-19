import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import AnimationCount from 'react-count-animation'
import 'react-count-animation/dist/count.min.css';


class Statistics extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    

    render(){
        const settings = {
            start: 0,
            count: 1000,
            duration: 3000,
            decimals: 0,
            useGroup: true,
            animation: 'up'
        };
        return(
            <div style={{background: 'linear-gradient(to bottom right, #91ada2, #05c67b)'}}>
                <center><h1 style={{fontFamily:'Montserrat, sans-serif'}}>--Some Statistics--</h1></center>
            <Grid container columns={3}>
                <Grid.Row>
                    <Grid.Column>
                    <div class="stat-bar">
                        <br/>
                        <h1 className="title">Authors</h1>
                        <div className="exam-div">
                            <AnimationCount {...settings}/>
                        </div>
                    </div>
                    </Grid.Column>
                    <Grid.Column>
                    <div class="stat-bar">
                        
                        <br/>
                        <h1 className="title">Articles</h1>
                        <div className="exam-div">
                            <AnimationCount {...settings}/>
                        </div>
                    </div>
                    </Grid.Column>
                    <Grid.Column>
                    <div class="stat-bar">
                        <br/>
                        <h1 className="title">Subscribers</h1>
                        <div className="exam-div">
                            <AnimationCount {...settings}/>
                        </div>
                    </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
            </div>
        )
    }
}

export default Statistics