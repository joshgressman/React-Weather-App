import React, { Component } from "react";

class SearchBar extends Component {

  // Initialize State
  constructor(props) {
    super(props);

    this.state = { term: ''};

    //Bind contect of input changed
    this.onInputChange = this.onInputChange.bind(this);
    // In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.
  }

  //Event handles all DOM event change handlers
  onInputChange(event) {
   console.log(event.target.value);
   this.setState({term: event.target.value});
  }

  //Prevents default form POST on submit causing page re-rendering
  onFormSubmit(event){
   event.preventDefault();

   //Go fetch weather data
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
       <input 
        className="form-control"
        placeholder="Get a five day forcast in you city"
        value={this.state.term}
        //Callback / Higher order function function, function passed to another function
        onChange={this.onInputChange}
       />
       <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Submit</button>
       </span>
      </form>
    );
  }
}

export default SearchBar;
