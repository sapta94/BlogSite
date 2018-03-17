import React, { Component } from 'react'
import { Menu,Grid,Search } from 'semantic-ui-react'

class SearchBar extends React.Component{
    render(){
        return(
            <div className="header-img">
                <Grid columns={2} centered  >
                    
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