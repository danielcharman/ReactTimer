let React = require('react');

let Clock = require('Clock');
let CountdownForm = require('CountdownForm');
let Controls = require('Controls');

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
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if(newCount === 0) {
        this.setState({
          countdownStatus: 'stopped'
        });
      }
    }, 1000);
  },
  _handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  _handleStatusChange: function(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },
  render: function() {
    let {count, countdownStatus} = this.state;
    let renderControlArea = () => {
      if(countdownStatus !== 'stopped') {
        return (
          <Controls countdownStatus={countdownStatus} onStatusChange={this._handleStatusChange}/>
        );
      }else{
        return (
          <CountdownForm onSetCountdown={this._handleSetCountdown}/>
        );
      }
    };
    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
