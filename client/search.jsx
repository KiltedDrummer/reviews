//this component will be rendered conditionally? 
//only if the the "search clicked" is true
//^that state will belong inside index.jsx

import React from 'react';
//import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Bar = styled.input`
    top: 25px;
    left: 350px;
    position: absolute;
    border: none;
    border-style: solid;
    width: 200px;
    border-color: #EBEBEB;
    border-width: 1px;
    height: 30px;
    font-size:15px;
    
`
const Title = styled.div`
    color: #484848
    font-size: 24px;
    font-weight: 550
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    margin-left: 41px;
    padding: 0px ;
    display: inline ;
    position:absolute;
    top:27px;
`
const Star = styled.img`
    position: absolute;
    top:27px;
    margin-left: 195px;
    width: 130px;
    height: 30px;
`
const Accuracy = styled.div`
    position:absolute;
    top: 100px;
    font-size: 19px;
    line-height: 22px;
    letter-spacing: normal;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    color: #484848;
    margin-left: 40px;
    font-weight: lighter;
`
const Location = styled.div`
    position:absolute;
    top: 100px;
    font-size: 19px;
    line-height: 22px;
    letter-spacing: normal;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    color: #484848;
    margin-left: 340px;
    font-weight: lighter;
`
const AStar = styled.img`
    position: absolute;
    top:93px;
    margin-left: 195px;
    width: 130px;
    height: 30px;
`
const LocStar = styled.img`
    position: absolute;
    top:93px;
    margin-left: 420px;
    width: 130px;
    height: 30px;
`
const CheckinStar = styled.img`
    position: absolute;
    top:145px;
    margin-left: 420px;
    width: 130px;
    height: 30px;
`
const CommStar = styled.img`
    position: absolute;
    top:145px;
    margin-left: 193px;
    width: 130px;
    height: 30px;
`
const CleanStar = styled.img`
    position: absolute;
    top:192px;
    margin-left: 195px;
    width: 130px;
    height: 30px;
`
const Communication = styled.div`
    position:absolute;
    top: 150px;
    font-size: 19px;
    line-height: 22px;
    letter-spacing: normal;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    color: #484848;
    margin-left: 40px;
    font-weight: lighter;
`
const Valuestar =  styled.img`
    position: absolute;
    top:192px;
    margin-left: 420px;
    width: 130px;
    height: 30px;
`

const Line = styled.div`
font-size: 16px;
font-weight: lighter;
color:#f4f4f4;
position: absolute;
top: 65px;
margin-left: 40px;

`

const Cleanliness = styled.div`
    position:absolute;
    top: 200px;
    font-size: 19px;
    line-height: 22px;
    letter-spacing: normal;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    color: #484848;
    margin-left: 40px;
    font-weight: lighter;
`
const Value = styled.div`
    position:absolute;
    top: 200px;
    font-size: 19px ;
    line-height: 22px;
    letter-spacing: normal;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    color: #484848;
    margin-left: 340px;
    font-weight: lighter;
`
const Checkin = styled.div`
    position:absolute;
    top: 150px;
    font-size: 19px;
    line-height: 22px;
    letter-spacing: normal 
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    color: #484848;
    margin-left: 340px;
    font-weight: lighter;
`
class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          queryString:'',
      }

      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.handleSearchChange = this.handleSearchChange.bind(this);
    }

handleKeyPress(e){
    if(e.key ==="Enter") {
        this.props.handleQueryChange(this.state.queryString)
    }
}

handleSearchChange(e){
  this.setState({queryString:e.target.value})
}

handleClear(e){ 
    if(e.target.value.length > 1) {
        //reset the data...to be all reviews
        //console.log(this.props.handleReset)
        this.props.handleReset();
    }
}

render() {
  return (
    <div>
      <Title>200 Reviews</Title>
      <Line>_______________________________________________________________</Line>

      <Accuracy>Accuracy</Accuracy>
      <AStar src="https://www.corginb.com/wp-content/uploads/2018/07/airbnb-reviews-stars.png" height="13" weight="13"></AStar>
      <Location>Location</Location>
      <LocStar src="https://www.corginb.com/wp-content/uploads/2018/07/airbnb-reviews-stars.png" height="13" weight="13"></LocStar>

      <Communication>Communication</Communication>
      <CommStar src="https://www.corginb.com/wp-content/uploads/2018/07/airbnb-reviews-stars.png" height="13" weight="13"></CommStar>
 
      <Cleanliness>Cleanliness</Cleanliness>
      <CleanStar src="https://www.corginb.com/wp-content/uploads/2018/07/airbnb-reviews-stars.png" height="13" weight="13"></CleanStar>
      <Checkin>Check-in</Checkin>
      <CheckinStar src="https://www.corginb.com/wp-content/uploads/2018/07/airbnb-reviews-stars.png" height="13" weight="13"></CheckinStar>
      <Value>Value</Value>
      <Valuestar src="https://www.corginb.com/wp-content/uploads/2018/07/airbnb-reviews-stars.png" height="13" weight="13"></Valuestar>
      <Star src="https://www.corginb.com/wp-content/uploads/2018/07/airbnb-reviews-stars.png" height="13" weight="13"></Star>
      <Bar onKeyPress={this.handleKeyPress} onClick={this.handleClear.bind(this)} 
      onChange={this.handleSearchChange} type="search" placeholder="  Search reviews"/>
      
    </div>
  )
}

}

export default Search;


