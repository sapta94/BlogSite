import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Button, Header, Image, Modal,Form,Checkbox } from 'semantic-ui-react'
import DayPickerInput from 'react-day-picker/DayPickerInput'

class Navbar extends Component {

  
  state = {startDate:Date.now()}

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
    
    var register= <Menu.Item position='right' name="register"  onClick={this.handleItemClick}>
                    <b>Not a Member? </b> Register Here <i class="fa fa-registered" style={{fontSize:"20px",marginLeft:'5px'}}></i>
                </Menu.Item>

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
                <Button primary>Login<i className="fa fa-sign-in" style={{fontSize:"15px",marginLeft:'5px'}}></i></Button>
                </Form>
              </Modal.Content>
            </Modal>

            <Modal trigger={register}>
              <Modal.Header>Register Yourself</Modal.Header>
              <Modal.Content>
              <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='Firstname here..' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input type="text" placeholder='Surname here...' />
                </Form.Field>
                <Form.Field>
                    <label>Date of birth</label>
                    <DayPickerInput format="DD/MM/YYYY" placeholder="enter DOB"  />
                </Form.Field>
                <Form.Field>
                    <label>Enter Your Email</label>
                    <input placeholder='Enter your Email' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type="password" placeholder='Password Here' />
                </Form.Field>
                <Form.Field>
                    <label>Confirm Password</label>
                    <input type="password" placeholder='Password Here' />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button primary>Submit<i className="fa fa-sign-in" style={{fontSize:"15pxpx",marginLeft:'5px'}}></i></Button>
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