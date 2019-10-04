import React from 'react';
import {Button} from 'reactstrap';

class Member extends React.Component {

  onSubmit = () =>{
    this.props.history.push('/');
  }
  render() {
    return (
      <form>
        <input placeholder="name" type="name"/>
        <input placeholder="email" type="email"/>
        <Button onClick={this.onSubmit}> Submit</Button>
      </form>
    )
  }
}
export default Member