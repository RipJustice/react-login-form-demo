import UserForm from '../components/Form.js';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';


const pageContainer = css`
  padding: 60px 100px;
  background: #fff;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
  border-radius: 4px;
`
const Main = () => {
  return (    
    <div css={pageContainer}>  
      <UserForm />
    </div>    
  );
}

export default Main;
