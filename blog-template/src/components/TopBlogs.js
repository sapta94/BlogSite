import React from 'react'
import { Card, Icon,Grid } from 'semantic-ui-react'


class TopBlogs extends React.Component{

    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div style={{background: 'linear-gradient(to bottom right, #91ada2, #05c67b)'}}>
            <center><h1 style={{fontFamily:'Montserrat, sans-serif',fontSize:'35px'}}>--Top Bloggers--</h1></center>
            <br/>
            <Grid container>
                <Grid.Row>
                    <Grid.Column mobile={9} tablet={6} computer={4} >
                        <Card
                            image='https://www.nexia-sabt.co.za/wp-content/uploads/2016/05/dummy.jpg'
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            extra={<a>See More -></a>}
                        />
                    </Grid.Column>
                    <Grid.Column mobile={9} tablet={6} computer={4} >
                        <Card
                            image='https://roiproperties.com/wp-content/uploads/2017/06/user_profile_female.jpg'
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            extra={<a>See More -></a>}
                        />
                    </Grid.Column>
                    <Grid.Column mobile={9} tablet={6} computer={4} >
                        <Card
                            image='https://www.nexia-sabt.co.za/wp-content/uploads/2016/05/dummy.jpg'
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            extra={<a>See More -></a>}
                        />
                    </Grid.Column>
                    <Grid.Column mobile={9} tablet={6} computer={4} >
                        <Card
                            image='https://roiproperties.com/wp-content/uploads/2017/06/user_profile_female.jpg'
                            header='Elliot Baker'
                            meta='Friend'
                            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                            extra={<a>See More -></a>}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        )
    }

}

export default TopBlogs