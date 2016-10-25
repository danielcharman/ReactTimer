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
  componentDidUpdate: function(previousProps, previousState) {
    if(this.state.timerStatus !== previousState.timerStatus) {
      console.log('componentDidUpdate', this.state.timerStatus);
      switch(this.state.timerStatus) {
        case 'started':
          this._startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  _startTimer: function() {
    this.timer = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
        // count: newCount >= 0 ? newCount : 0
      });

      if(newCount === 0) {
        this.setState({
          timerStatus: 'stopped'
        });
      }
    }, 1000);
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
