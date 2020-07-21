import React from 'react';
import { Button, DatePicker } from 'antd';
// import { Router, Route, Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux'
import { getSourceList } from '../../store/actionCreators'


const mapDispatchToProps = disaptch => {

  return {
    getSourceList: () => disaptch(getSourceList())
  }
}

class demo extends React.Component {

  componentDidMount () {
    // this.props.getSourceList()
  }

  render () {

    return (
      <div className="App">
        <Button type="danger">按钮</Button>
        <DatePicker onChange={ this.onStartChange } value={ this.state.startValue } disabledDate={ this.disabledStartDate } />
        <DatePicker onChange={ this.onEndChange } value={ this.state.endValue } disabledDate={ this.disabledEndDate } />
        <ul>
          {/* <li><Link to="/about">About</Link></li> */}
          {/* <li><Link to="/inbox">Inbox</Link></li> */}
        </ul>
        {/* {this.props.children} */}
      </div>
    )
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = value => {
    this.onChange('startValue', value);
  };

  onEndChange = value => {
    this.onChange('endValue', value);
  };

  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
  };

  disabledStartDate = current => {
    return current < moment().subtract(1, 'day');
  };

  disabledEndDate = endValue => {
    const { startValue } = this.state;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  // disabledStartDate = (current) => {
  //   // Can not select days before today and today
  //   //return current && current < moment().endOf('day');//！！！！！当天之前的不可选，包括当天
  //   return current < moment().subtract(1, 'day') //！！！！！当天之前的不可选，不包括当天
  // }
}

export default connect(null, mapDispatchToProps)(demo)
