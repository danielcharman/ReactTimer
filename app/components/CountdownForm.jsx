let React = require('react');

let CountdownForm = React.createClass({
  _onSubmit: function(event) {
    event.preventDefault();
    let strSeconds = this.refs.seconds.value;

    console.log('input count', $('input').length);

    if(strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render: function() {
    return (
      <div>
        <form ref="form" onSubmit={this._onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
