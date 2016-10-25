let React = require('react');

let Clock = require('Clock');
let Controls = require('Controls');

let Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      timerStatus: 'stopped'
    }
  },
  _handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      timerStatus: 'started'
    });
  },
  _handleStatusChange: function(newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  },
  render: function() {
    let {count, timerStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this._handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;
