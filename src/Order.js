import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export class Order extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      minutes: '',
      hours: ''
    };

    this.onChangeMin = this.onChangeMin.bind(this);
    this.onChangeHours = this.onChangeHours.bind(this);
  }

  handleChange = date => {
    this.setState({
      startDate: date,
      hours: '',
      minutes: ''
    });
  };
  onChangeMin = (event) => {
    this.setState({
      minutes: event.target.value
    });
  };
  onChangeHours = (event) => {
    this.setState({
      hours: event.target.value
    });
  }

  render() {
    console.log(this.state.minutes);
    console.log(this.state.hours);

    return (
      <div>
        <h2>Введите нзвание заказа</h2>
        <input type="text"></input>
        <h2>Введите краткое описание</h2>
        <textarea type="text"></textarea>
        <br></br>
        <span>Введите дату</span>
        <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
        <br></br>
        <span>Введите часы</span>
        <input type="text" name="hours" value={this.state.hours} onChange={this.onChangeHours}></input>
        <br></br>
        <span>Введите минуты</span>
        <input type="text" name="minutes" value={this.state.minutes} onChange={this.onChangeMin}></input>
      </div>
    );
  }
}
export default Order;