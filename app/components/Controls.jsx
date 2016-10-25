let React = require('react');

let Controls = React.createClass({
  propTypes: {
      countdownStatus: React.PropTypes.string.isRequired,
      onStatusChange: React.PropTypes.func.isRequired
  },
  _onStatusChange: function(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  },
  render: function() {
    let {countdownStatus} = this.props;
    let renderStartStopButtons = () => {
        if(countdownStatus == 'started') {
          return (
            <button className="button secondary" onClick={this._onStatusChange('paused')}>Pause</button>
          );
        }else {
          return (
            <button className="button primary" onClick={this._onStatusChange('started')}>Start</button>
          );
        }
    };

    return (
      <div className="controls">
        {renderStartStopButtons()}
        <button className="button alert hollow" onClick={this._onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;
