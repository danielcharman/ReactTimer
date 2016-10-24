let React = require('react');

let Clock = require('Clock');

let Countdown = React.createClass({
  render: function() {
    return (
      <div>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
});

module.exports = Countdown;
