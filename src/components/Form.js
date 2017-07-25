import React, {Component} from 'react';

export default class Form extends Component {

  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name:"",
      pilot:""
    };
  }

  handleNameChange (event){
    this.setState({name: event.target.value})
  }

  handleSubmit (event) {
    alert("HEY this.pilotName: " + this.state.name)
    this.pilotName = this.state.name
  }

  render() {return(
    <div className="form">
      <form>
        <label>What is your name, Pilot?</label>
        <input name="name" type="text" value={this.state.name} onChange={this.handleNameChange}/>
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
    </div>
    )
  }
}
