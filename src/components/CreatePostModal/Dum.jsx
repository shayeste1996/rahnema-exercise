import React from "react";
function getList() {
    return new Promise(function(resolve) {
      setTimeout(() => resolve([1, 2, 3]), 1000);
    });
  }
  
  export default class Dum extends React.Component {
    state = {
      isLoading: false,
      show: false,
      list: []
    };
  
    onSubmit = event => {
      this.setState({ isLoading: true });
      getList().then(list => {
        this.setState({
          isLoading: false,
          list,
          show: false
        });
      });
    };
  
    render() {
      return (
          <>
          {this.state.list.map((item)=><h1>{item}</h1>)}
        <button
          onClick={this.onSubmit}
          disabled={this.state.isLoading}
        >
          {this.state.isLoading ? "Loading..." : "OK"}
        </button>
        </>
      );
    }
  }