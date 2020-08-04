import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components'


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
    return (
      <WrapperOrder>
        <WidthWrapperOrder>
          <Titleorder>Введите название заказа</Titleorder>
          <InputNameOrder type="text" />
          <Titleorder>Введите краткое описание</Titleorder>
          <Message type="text" />
          <br></br>
          <span>Введите дату</span>
          <DatePicker selected={this.state.startDate} onChange={this.handleChange} />
          <br></br>
          <span>Введите часы</span>
          <input type="text" name="hours" value={this.state.hours} onChange={this.onChangeHours}></input>
          <br></br>
          <span>Введите минуты</span>
          <input type="text" name="minutes" value={this.state.minutes} onChange={this.onChangeMin}></input>
        </WidthWrapperOrder>
      </WrapperOrder>
    );
  }
}
export default Order;

const InputNameOrder = styled.input`
box-sizing:border-box;
padding-left:15px;
width:600px;
height:40px;
border:none;
&:focus{
  outline:none;
}
`;

const Inputhours = styled.input`

`;

const Inputminutes = styled.input`

`;
const Inputdate = styled.input`

`;
const Titleorder = styled.h2`
  padding-top:40px;
  text-transform:uppercase;
  font-size:20px;
  padding-bottom:20px;

`;
const Message = styled.textarea`
padding-top:15px;
padding-left:15px;
outline:none;
box-sizing:border-box;
width:600px;
min-height:200px;
border:none;
&:focus{
  border:none;
}
&:active{
  border:none;
}
`;

const WrapperOrder = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;
const WidthWrapperOrder = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background-color:#d0f2d4;
width:900px;
`;