import React from 'react';
import { withRouter } from "react-router-dom";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const inputWidth = css`
    input {
        width: 100%;
    }
 
`

const topPad = css`
    padding-top: 20px;
`

const FormTitle = () => {
    return <h1>User Registration Form</h1>;
}  

const Submit = () => {
    return (
        <div css={topPad}>
            <Button label="Submit" />
        </div>
    );
}

class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            fname: false,
            lname: false,
            eMail: false,
            pword: false,
            success: false,        
        };

        this.setVal = this.setVal.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.checkVal = this.checkVal.bind(this);
    }

    

    setVal(e) {        
        if (e.target.value.trim() !== '' && this.state[e.target.id] === true) {
            this.setState({[e.target.id]: false}); 
        }  

        this.setState({
            [e.target.name]: e.target.value
        });       
    }

    checkVal(e) {      
        !e.target.value.trim() ? this.setState({[e.target.id]: true}) : this.setState({[e.target.id]: false});        
    }

    formSubmit(e) {
        if (this.state.firstName.trim() && this.state.lastName.trim() && this.state.email.trim() && this.state.password.trim()) {
            this.setState({
                success: true
            });           
            this.props.history.push('/success');
        } else {
            for ( let i = 0; i < 4; i++ ) {        
                if (!e.target[i].value) {
                    this.setState({[e.target[i].id]: true})
                }
            }
        }       
        e.preventDefault();
    }
    
    render() {
        return (           
            <form className="Form" onSubmit={this.formSubmit}> 
                <FormTitle />
                <div className="p-field p-grid p-dir-col"> 
                    <label htmlFor="fname" className="p-d-block">First Name</label>
                    <InputText id="fname" className={this.state.fname ? 'p-invalid' : ''} name='firstName' value={this.state.firstName}  onChange={this.setVal} onBlur={this.checkVal}/>
                </div>
                <div className="p-field p-grid p-dir-col"> 
                    <label htmlFor="lname" className="p-d-block">Last Name</label>
                    <InputText id="lname" className={this.state.lname ? 'p-invalid' : ''} name='lastName' value={this.state.lastName} onChange={this.setVal} onBlur={this.checkVal}/>
                </div>
                <div className="p-field p-grid p-dir-col"> 
                    <label htmlFor="eMail" className="p-d-block">Email</label>
                    <InputText id="eMail" className={this.state.eMail ? 'p-invalid' : ''} name='email' value={this.state.email} onChange={this.setVal} onBlur={this.checkVal}/>
                </div>
                <div className="p-field p-grid p-dir-col"> 
                    <label htmlFor="pword" className="p-d-block">Password</label>
                    <Password id="pword" className={this.state.pword ? 'p-invalid' : ''} css={inputWidth} name='password' value={this.state.password} onChange={this.setVal} onBlur={this.checkVal} toggleMask/>
                </div>
                <div className="p-field p-text-right p-grid p-dir-col">                     
                    <Submit />
                </div>
            </form>       
        );
    }    
}
  
export default withRouter(UserForm);