import React from 'react';
import {Button} from 'reactstrap';

class Member extends React.Component {

  onSubmit = () =>{
    this.props.history.push('/');
  }
  render() {
    return (
      <section>
      <span>&nbsp;&nbsp;</span>
      <form>
        <input placeholder="name" type="name"/>
        <input placeholder="email" type="email"/>
        <Button onClick={this.onSubmit}> Submit it</Button>
      </form>
      </section>
    )
  }
}
export default Member