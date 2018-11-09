import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Globleheader from './Globleheader'
import Big_Img from './Big_Img'
import Empty_Row from './Empty_Row'
import Last_Header from './Last_Header'
import Mid_Part from './Mid_Part'
import Popular_Categories from'./Popular_Categories'
import Popular_Categories_Items from './Popular_Categories_Items'
import Save_more_with_Staples_Brand_Products from './Save_more_with_Staples_Brand_Products'
import Save_more_with_Staples_Brand_Products_items from './Save_more_with_Staples_Brand_Products_items'
import Customers_Top_Picks from './Customers_Top_Picks'
import Customers_Top_Picks_items from './Customers_Top_Picks_items'
import Big_Img_2 from './Big_Img_2'


class App extends Component {
  render() {
    return (
      <div className="App">
       	<Globleheader />
       	<Big_Img />
       	<Empty_Row />
       	<Last_Header />
        <Empty_Row />
        <Mid_Part />
        <Popular_Categories />
        <Popular_Categories_Items />
        <Save_more_with_Staples_Brand_Products />
        <Save_more_with_Staples_Brand_Products_items />
        <Customers_Top_Picks />
        <Customers_Top_Picks_items />
        <Big_Img_2 />
      </div>
    );
  }
}

export default App;
