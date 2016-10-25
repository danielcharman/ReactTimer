let React = require('react');

let Clock = require('Clock');
let CountdownForm = require('CountdownForm');

let Countdown = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      countdownStatus: 'stopped'
    }
  },
  componentDidUpdate: function(previousProps, previousState) {
    if(this.state.countdownStatus !== previousState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'stopped':

          break;
        case 'started':
          this._startTimer();
          break;
        case 'paused':

          break;
      }
    }
  },
  _startTimer: function() {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  },
  _handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  render: function() {
    let {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this._handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
