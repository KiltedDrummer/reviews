import React from 'react';
import Search from './search.jsx'
import ReviewList from './reviewList.jsx';
import Pagination from './pagination.jsx';
const fetch = require('node-fetch');

import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    homeId: '100', //DEFAULT 100 (Same reviews for any house)
    data: [],
    allReviews: [],
    filteredReviews:[],
    firstPage:[],
    displayedReviews:[],
    searchMode: false,
    query:'',
    currentPage:1, //default
    pages:[1,2,3,4,5] 
    //default (no search) eventually, I will make this render on comp did mount
    //based off the reviews from a specific house
    };
  }

 fetcher(){
    if(this.props.homeId !== undefined) {
      this.setState({homeId: this.props.homeId})
    }
    fetch('http://localhost:3001/homes/' + this.state.homeId + '/reviews/1')
    .then(response => response.json())
    .then((data) => {
      this.setState({data:data})
      this.setState({firstPage:data})
    })
  }

  componentDidMount() {
      this.fetcher();
  }

  handlePageChange(e, searchM) {  

  if(!searchM) {
   fetch('http://localhost:3001/homes/'+ this.state.homeId +'/reviews/' + e) //simple search based off all reviews
      .then(response => response.json())
      .then((data) => {
        this.setState({data:data})
        this.setState({currentPage:e})
      })
    }
    else { //else you are in searchMode and return a new array with the new pages then change state of pages
      console.log("searchM", this.state.query)
      //page change fetch should include the query and the id
      fetch('http://localhost:3001/reviews/queried/' + this.state.query + "/" + e) //simple search based off all reviews
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.setState({displayedReviews:data})
      })
    }
    //the searchMode route will return based off not only 
    //the page # but also the query 
    //a combo between :id and :query 
  }

  handleQueryChange(query) { 
    //gets called the moment you press the "enter" key to search 
    //needs to pass down new page numbers to pagination through props (state change trickle down)
    console.log(query)
    this.setState({query:query})

    fetch('http://localhost:3001/reviews/queried/' + query ) //gets the pageArray (all under query)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if(data.length <= 5) { 
        console.log("here")
        var newPageArray = [1];
      } else if(data.length % 5 === 0) {

        var newPageArray = [];
        console.log("hree")
        for(var i = 1; i < 5; i++) {
          newPageArray.push(i);
        }
      } else {
        var newPageArray = [];
        console.log("here")
        var limit = Math.ceil(data.length/5) + 1;
        if(limit > 5) {
          limit = 5
        }
        for(var i = 1; i < limit; i++) {
          newPageArray.push(i)
        }
      }
        console.log("newPages", newPageArray)
      this.setState({
        pages: newPageArray,
        filteredReviews:data})
    
    })

    //want the default display to be page 1 of the queried reviews (done below)

    fetch('http://localhost:3001/reviews/queried/' + query + "/" + 1) 
      .then(response => response.json())
      .then(data => {
        this.setState({
          displayedReviews: data,
          searchMode:true,
        })
      })
      //will change state so that we are now in search mode 
      //and the pages will be rendered based on the filtered data

  }

//each mode will have the ability to change state 
//the component will be conditionally rendered based off that 

  handleReset(){ //should set search back to normal mode(false)
    this.setState({
      data: this.state.firstPage,
      searchMode: false})
  }

  render() {
   var searchMode = this.state.searchMode;
    if(!searchMode) {
      var dataToPass = this.state.data;
    } else {    //else if the search mode is true, then pass down filtered reviews instead of data  
      var dataToPass = this.state.displayedReviews; 
      
    }
    return (
      <Container className="reviewBox">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Search compDidMount={this.componentDidMount.bind(this)} handleReset={this.handleReset.bind(this)} handleQueryChange={this.handleQueryChange.bind(this)} />
        <div onClick={this.handlePageChange.bind(this)}></div>
        <ReviewList data={dataToPass}> 
        </ReviewList>
        <Pagination currentPage={this.state.currentPage} pageArray={this.state.pages}
        searchMode={this.state.searchMode} handlePageChange={this.handlePageChange.bind(this)}/>
        
      </Container>
    )
   }

};

export default App;