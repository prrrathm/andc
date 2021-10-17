import React from 'react';
//import ReactDOM from 'react-dom';
/**
class Square extends React.Component {
  constructor(props){
      super(props);
      this.state={
        value:null
      };
  }

  render() {
    return (
      /**
      <button className="square" onClick={function(){console.log('click');}}>
        {this.props.value}
      </button> */
      /**
      <button className="square" onClick={()=>{console.log('click')}}>
      {this.props.value}
    </button>
     */
    /**
    <button className="square" onClick={
      ()=>{this.setState({value: 'X'})}
      }>
      {this.state.value}
    </button>
     */
    /*
    <button className="square" onClick={
      ()=>{this.props.onClick()}
      }>
      {this.props.value}
    </button>
    );
  }
}
*/
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;