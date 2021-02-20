import React from 'react';

 

class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };
    }
    render() {
        return (
            <div className="Form">  
                test form
            </div>
        );
    }    
}
  
export default UserForm;