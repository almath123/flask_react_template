import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import $ from "jquery";
import './App.css';

class TextEntryForm extends Component{
    constructor(props){
        super(props);
        this.state = {text : ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setData = this.setData.bind(this);
    }

    setData(json){
        if("text" in json){
            this.setState({text : json["text"]})
        }
    }

    handleChange(event){
        this.setState({text : event.target.value});
    }

    handleSubmit(event){
        $.getJSON("/rev/", {"text" : this.state["text"]}, this.setData);
        event.preventDefault();
    }

    render(){
        return (
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formRevInput">
                    <ControlLabel>Reverse the text of the input with ajax</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.text}
                        placeholder="Enter text to reverse"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback/>
                    <Button type="submit">
                    Submit
                    </Button>
                    </FormGroup>
                </form>
               );

    }

     
}

class App extends Component {

    constructor(props){
        super(props);
        this.state = {data : [{"text":"NotLoaded"}]};
    }

    componentDidMount(){
        $.getJSON("/query/", (json) => this.setData(json))
    }

    setData(json){
        if(json){
            console.log(json);
            this.setState({data : json});
        }else{
            this.setState({data : [{"text":"Failed to load"}]});
        }
    }

    render() {
        return (
                <div className="App">
                <div className="App-header">
                <h2>Empty Application</h2>
                </div>
                {(this.state["data"] != null ? this.state["data"][0]["text"] : "nothing")}
                <TextEntryForm/>
                </div>
               );
    }
}

export default App;
