import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export class Order extends React.Component {
  state = {
    startDate: new Date()
  };
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {

    return (
      <div>
        <h2>Введите нзвание заказа</h2>
        <input type="text"></input>
        <h2>Введите краткое описание</h2>
        <textarea type="text"></textarea>
        <br></br>
        <span>Введите дату</span>
        <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
        <span>Введите время</span>
      </div>
    );
  }
}
export default Order;