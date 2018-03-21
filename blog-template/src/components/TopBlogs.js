import React from 'react'
import { Card,Grid } from 'semantic-ui-react'

const items = [
  {
    header: 'Tech Blog',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  },
  {
    header: 'Travel Blog',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    header: 'Food Blog',
    description: 'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
  },
]

class TopBlogs extends React.Component{

    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div style={{background: 'linear-gradient(to bottom right, #91ada2, #05c67b)'}}>
            <center><h1 style={{fontFamily:'Montserrat, sans-serif',fontSize:'35px'}}>--Top Blogs--</h1></center>
            <br/>
            <Grid container>
                <Grid.Row>
                    <Grid.Column mobile={9} tablet={6} computer={4} >
                        <Card.Group items={items} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        )
    }
}

export default TopBlogs

