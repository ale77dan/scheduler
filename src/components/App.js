import React, { Component } from 'react';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: moment().year(),
      months: moment.months()
    }
  }

  /* Render the current Year */
  renderYear() {
    const { year } = this.state;
    return (
      <h2>{year}</h2>
    )
  }

  /* Render all the Months of the Year */
  renderMonths() {
    const { months } = this.state;
    return (
      <ul className="months-container">
      {
        months.map((month, index) => {
          return (
            <li
              key={index}
            >
              {month}
              {this.renderDaysInMonth(index)}
            </li>
          )
        })
      }
      </ul>
    )
  }

  /* Render all the days in a month */
  renderDaysInMonth(monthIndex) {
    const days = [];

    const startOfMonth = moment().month(monthIndex).startOf('month')
    const endOfMonth = moment().month(monthIndex).endOf('month')

    let day = startOfMonth

    while (day <= endOfMonth) {
      days.push(day)
      day = day.clone().add(1, 'd')
    }

    return (
      <ul>
      {
        days.map((day, index) => {
          return (
            <li
              key={index}
            >
              {day.format('D')} - {day.format('ddd')}
            </li>
          )
        })
      }
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        Welcome to the React world! :)

        {this.renderMonths()}
      </div>
    );
  }
}

export default App;
