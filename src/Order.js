import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from 'styled-components'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';


export class Order extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      startMinutes: '',
      startHours: '',
      endMinutes: '',
      endHours: '',
      showInpFixPayment: false,
      showInpPaymentHour: false

    };
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
  handleChangePayment = (event) => {
    if (event.target.value === "fixprice") {
      this.setState({
        showInpFixPayment: !this.state.showInpFixPayment,
        showInpPaymentHour: false
      });
    } else {
      this.setState({
        showInpPaymentHour: !this.state.showInpPaymentHour,
        showInpFixPayment: false
      });
    }

  }

  render() {
    const showInpPaymentHour = this.state.showInpPaymentHour;
    const showInpFixPayment = this.state.showInpFixPayment;
    let button;
    if (showInpPaymentHour) {
      button = <input type="text" maxLength="3" placeholder="perhour" />
    }
    if (showInpFixPayment) {
      button = <input type="text" maxLength="3" placeholder="fixpayment" />
    }
    return (
      <WrapperOrder>
        <WidthWrapperOrder>
          <FormSettings>
            <Titleorder>Введите название заказа</Titleorder>
            <InputNameOrder type="text" />
            <Titleorder>Введите краткое описание</Titleorder>
            <Message type="text" />
            <h2>Способ оплаты</h2>
            <BlockPayment>
              <label>Фиксированная цена</label>
              <input onChange={this.handleChangePayment} value="fixprice" type="radio" name="payment" />
              <label>Оплата за час</label>
              <input value="hourprice" name="payment" onChange={this.handleChangePayment} type="radio" />
              {button}
            </BlockPayment>
            <h2>Адресс</h2>
            <LeafletMap
              center={[47, 35]}
              zoom={6}
              maxZoom={30}
              attributionControl={true}
              zoomControl={true}
              doubleClickZoom={true}
              scrollWheelZoom={true}
              dragging={true}
              animate={true}
              easeLinearity={0.35}
            >
              <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              />
              <Marker position={[50, 10]}>
                <Popup>
                  Popup for any custom information.
          </Popup>
              </Marker>
            </LeafletMap>

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
      </WrapperOrder >
    );
  }
}
export default Order;

const BlockPayment = styled.div`

input{
}
label{
 padding:10px;
}

`;
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