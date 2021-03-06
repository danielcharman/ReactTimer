let React = require('react');
let ReactDOM = require('react-dom');
let expect = require('expect');
let $ = require('jQuery');
let TestUtils = require('react-addons-test-utils');

let Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('_handleSetCountdown', () => {
    it('should set state to started and countdown', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown._handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it('should never set count less than zero', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown._handleSetCountdown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });

    it('should pause countdown on paused status', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown._handleSetCountdown(3);
      countdown._handleStatusChange('paused');

      setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should reset count on stopped', (done) => {
      let countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown._handleSetCountdown(3);
      countdown._handleStatusChange('stopped');

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });

});
