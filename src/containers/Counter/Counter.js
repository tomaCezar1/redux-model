import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {increment} from "../../store/actions/actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubtract} />
        <hr />
        <ul>
          {this.state.storedResults.map((strR) => {
            <li onClick={this.props.onDeleteResult} />;
          })}
        </ul>
      </div>
    );
  }
}

//state stored in redux, it will be displayed as props in the component
const mapStateToProps = (state) => {
  return {
    //give a name to your state you want to map in the component, and access them through state.counter
    ctr: state.counter,
    storedResults: state.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onAddCounter: () => dispatch({ type: 'ADD', val: 10 }),
    onSubtract: () => dispatch({ type: 'SUBTRACT', val: 15 }),
    onDeleteResult: () => dispatch({ type: 'Delete_RESULT' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
