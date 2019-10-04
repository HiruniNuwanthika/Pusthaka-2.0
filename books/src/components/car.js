import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import './car.scss';

class Car extends React.Component{
    constructor(){
        super();
        this.state = {color: "red", type:"toyota"};
        this.onButton2Click = this.onButton2Click.bind(this);
    }

    onButton1Click = () =>{
        this.setState({color:"blue"});
    }

    onButton2Click(){
        this.setState({type: "honda"});
    }

    render(){
        return(
            <div>
        <h2 style={{backgroundColor: "lightblue"}}>Hi, I am a {this.state.color} {this.state.type} Car created in {this.props.year}! </h2>
            <Col>
                <Row>
                    <Button
                        type="button"
                        onClick={this.onButton1Click}>
                        button1
                    </Button>
                </Row>
                <Row>
                    <Button
                        className = "button"
                        type="button"
                        onClick={this.onButton2Click}>
                        button2
                    </Button>
                </Row>
            </Col>
            </div>
        ); 
            
    }
}

export default Car;