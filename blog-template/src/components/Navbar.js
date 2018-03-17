import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Button, Header, Image, Modal,Form,Checkbox } from 'semantic-ui-react'

class Navbar extends Component {

  
  state = {}

  handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name,isModal:true })
}

  render() {
    const { activeItem } = this.state

    var signIn = <Menu.Item
                    name='sign-in'
                    active={activeItem === 'sign-in'}
                    onClick={this.handleItemClick}
                >
                {'Sign-in'}<i className="fa fa-user" style={{fontSize:"20px",marginLeft:'5px'}}></i>
                </Menu.Item>
    
    if(this.state.isModal==true){
        var modal = <ModalExample modalNode={signIn}/>
    }
    else{
        var modal = <div></div>
    }

    return (
      <Menu stackable>
        <Menu.Item>
          <img src='/images/logo.jpg' />
          <span style={{fontFamily: 'Comfortaa, cursive',fontSize:'18px'}}>AuthorsDaddy</span>
        </Menu.Item>

                

        <Menu.Item
          name='testimonials'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Contact Us <i className="fa fa-phone" style={{fontSize:"20px",marginLeft:'5px'}}></i>
        </Menu.Item>
        <Modal trigger={signIn}>
              <Modal.Header>Provide your Credentials</Modal.Header>
              <Modal.Content>
              <Form>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Enter your Email' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type="password" placeholder='Password Here' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button primary><i className="fa fa-sign-in" style={{fontSize:"20px",marginLeft:'5px'}}></i>Login</Button>
                </Form>
              </Modal.Content>
            </Modal>
      </Menu>
    )
  }
}

class ModalExample extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Modal trigger={this.props.modalNode}>
              <Modal.Header>Select a Photo</Modal.Header>
              <Modal.Content>
              <Form>
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Enter your Email' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type="password" placeholder='Password Here' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button primary><i className="fa fa-sign-in" style={{fontSize:"20px",marginLeft:'5px'}}></i>Login</Button>
                </Form>
              </Modal.Content>
            </Modal>
          )
    }
    
}
export default Navbar