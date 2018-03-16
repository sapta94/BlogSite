import React, { Component } from 'react'
import { Menu,Grid,Search } from 'semantic-ui-react'

class SearchBar extends React.Component{
    render(){
        return(
            <div className="header-img">
                <Grid>
                   <SearchField/>
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
            <Grid.Column width={50}>
            <Search
              value={'Search here'}
              {...this.props}
            />
          </Grid.Column>
        )
    }
}

export default SearchBar