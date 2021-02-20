import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const FormTitle = () => {
    return <h1>User Registration Form</h1>;
}  

const Submit = (props) => {
    return <Button label="Submit" />;
}

const minWidth = css`
  min-width: 216px;
`

class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };

        this.setVal = this.setVal.bind(this);
    }

    setVal(e) {       
        this.setState({
            [e.target.name]: e.target.value
        });       
    }
    
    render() {
        return (
            <div>
                <form className="Form"> 
                    <FormTitle />
                    <div className="p-field"> 
                        <label htmlFor="fname" className="p-d-block">First Name</label>
                        <InputText id="fname" css={minWidth} name='firstName' value={this.state.firstName} onChange={this.setVal} />
                    </div>
                    <div className="p-field"> 
                        <label htmlFor="lname" className="p-d-block">Last Name</label>
                        <InputText id="lname" css={minWidth} name='lastName' value={this.state.lastName} onChange={this.setVal} />
                    </div>
                    <div className="p-field"> 
                        <label htmlFor="eMail" className="p-d-block">Email</label>
                        <InputText id="eMail" css={minWidth} name='email' value={this.state.email} onChange={this.setVal} />
                    </div>
                    <div className="p-field"> 
                        <label htmlFor="pword" className="p-d-block">Password</label>
                        <Password id="pword" name='password' value={this.state.password} onChange={this.setVal} toggleMask/>
                    </div>
                    <Submit />
                </form>
            </div>
        );
    }    
}
  
export default UserForm;