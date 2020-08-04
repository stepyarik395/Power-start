import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components'


export class Order extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      startMinutes: '',
      startHours: '',
      endMinutes: '',
      endHours: ''

    };

    this.onChangeMin = this.onChangeMin.bind(this);
    this.onChangeHours = this.onChangeHours.bind(this);
  }

  handleChangeStart = (date) => {
    this.setState({
      startDate: date,
    });
  };
  handleChangeEnd = (date) => {
    this.setState({
      endDate: date,
    });
  };
  onChangeMin = (event) => {
    this.setState({
      startMinutes: event.target.value,
      endMinutes: event.target.value
    });
  };
  onChangeHours = (event) => {
    this.setState({
      startHours: event.target.value,
      endHours: event.target.value
    });
  }
  render() {
    return (
      <WrapperOrder>
        <WidthWrapperOrder>
          <FormSettings>
            <Titleorder>Введите название заказа</Titleorder>
            <InputNameOrder type="text" />
            <Titleorder>Введите краткое описание</Titleorder>
            <Message type="text" />
            <FlexContainer>
              <div>
                <Titleorder>Начало</Titleorder>
                <TextLine>Введите дату</TextLine>
                <DatePicker selected={this.state.startDate} onChange={this.handleChangeStart} />
                <TextLine>Введите часы</TextLine>
                <input
                  type="number"
                  min="1"
                  max="24"
                  name="hours"
                  value={this.state.hours}
                  onChange={this.onChangeHours} />
                <TextLine>Введите минуты</TextLine>
                <input
                  type="number"
                  min="0"
                  max="60"
                  name="minutes"
                  value={this.state.minutes}
                  onChange={this.onChangeMin} />
              </div>
              <div>
                <Titleorder>Конец</Titleorder>
                <TextLine>Введите дату</TextLine>
                <DatePicker selected={this.state.endDate} onChange={this.handleChangeEnd} />
                <TextLine>Введите часы</TextLine>
                <input
                  type="number"
                  min="1"
                  max="24"
                  name="hours"
                  value={this.state.hours}
                  onChange={this.onChangeHours}>
                </input>
                <br></br>
                <TextLine>Введите минуты</TextLine>
                <input
                  type="number"
                  min="0"
                  max="60"
                  name="minutes"
                  value={this.state.minutes}
                  onChange={this.onChangeMin}>
                </input>
              </div>
            </FlexContainer>
            <ButtonSubmit type="submit" />
          </FormSettings>
        </WidthWrapperOrder>
      </WrapperOrder>
    );
  }
}
export default Order;

const FormSettings = styled.form`
display:flex;
flex-direction:column;
`;

const FlexContainer = styled.div`
display:flex;
justify-content:space-between;
`;

const ButtonSubmit = styled.input`
align-self:center;
cursor:pointer;
text-transform:uppercase;
margin-top:20px;
width:200px;
display:block;
`;

const TextLine = styled.span`
display:block;
width:150px;
`;

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