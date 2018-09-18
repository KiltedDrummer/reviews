import React from 'react';
import Search from './search.jsx'
import ReviewList from './reviewList.jsx';
import Pagination from './pagination.jsx';
const fetch = require('node-fetch');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    data: [],
    allReviews: [],
    filteredReviews:[],
    firstPage:[],
    displayedReviews:[],
    searchMode: false,
    query:'',
    };
  }

 fetcher(){
    fetch('http://localhost:3001/reviews/1')
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
   fetch('http://localhost:3001/reviews/' + e) //simple search based off all reviews
      .then(response => response.json())
      .then((data) => {
        this.setState({data:data})
      })
    }
    else { //else you are in searchMode 
      console.log("searchM", this.state.query)
      //page change fetch should include the query and the id
      fetch('http://localhost:3001/reviews/queried/' + this.state.query + "/" + e) //simple search based off all reviews
      .then(response => response.json())
      .then((data) => {
        this.setState({displayedReviews:data})
      })
    }

    //the searchMode route will return based off not only 
    //the page # but also the query 
    //a combo between :id and :query 
   
  }

  handleQueryChange(query) { //function that search mode (true) uses 
    //gets called the moment you press the "enter" key to search 
    console.log(query)

    this.setState({query: query});
    //you have the query after pressing enter 
    //now you want to fetch the filtered data and pass 
    //that down to the reviewList 
    //this function should also contain a number for the page...
    fetch('http://localhost:3001/reviews/queried/' + query ) //gets the page count
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({filteredReviews: data})
    })

    //want the default display to be page 1 of the below 

    fetch('http://localhost:3001/reviews/queried/' + query + "/" + 1) //default 
      .then(response => response.json())
      .then(data => {
        console.log("recieved", data)
        this.setState({
          displayedReviews: data,
          searchMode:true})
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
      <div className="reviewBox">
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
        <Pagination searchMode={this.state.searchMode} length={this.state.filteredReviews.length} handlePageChange={this.handlePageChange.bind(this)}/>
        
      </div>
    )
   }

};

export default App;