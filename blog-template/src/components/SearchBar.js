import React, { Component } from 'react'
import { Menu,Grid,Search } from 'semantic-ui-react'

class SearchBar extends React.Component{
    render(){
        return(
            <div className="header-img">
                <Grid columns={2} centered  >
                    <Grid.Row>
                        <Grid.Column>
                            <center><span style={{fontFamily:'Acme, sans-serif',fontSize:'40px'}}>Let's Write Together</span></center>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <SearchField/>
                    </Grid.Row>  
                </Grid>
            </div>
        )
    }
}

class SearchField extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Grid.Column>
            <Search
              value={'Search here'}
              size='huge'
              {...this.props}
            />
          </Grid.Column>
        )
    }
}

export default SearchBar