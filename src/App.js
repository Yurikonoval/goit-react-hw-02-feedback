import './App.css';
import React from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const percents = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100,
    );
    return this.countTotalFeedback() !== 0 ? percents : 0;
  }

  stateKeys = Object.keys(this.state);

  render() {
    const goodCount = this.state.good;
    const neutralCount = this.state.neutral;
    const badCount = this.state.bad;
    const totalCount = this.countTotalFeedback();
    const positivePercentCount = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.stateKeys}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalCount === 0 ? (
            <Notification massage="No feedback given" />
          ) : (
            <Statistics
              good={goodCount}
              neutral={neutralCount}
              bad={badCount}
              total={totalCount}
              positivePercentage={positivePercentCount}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
