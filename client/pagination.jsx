import React from 'react';
import { Component } from 'react';

import styled from 'styled-components';

const Page = styled.div`
    padding: 8px;
    width: 17px;
    border-radius: 50%;
    padding: 5px;
    margin: 5px;
    background: rgb(0, 132, 137);
    color: #ffffff;
    text-align: center;
    font:Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    display:inline-block;
`

class Pagination extends Component {
    
  render() {
    if(!this.props.searchMode) { //simply telling this component how many pages it will need to 
                                 //render 
        var length = 21
    } else {//want 10 reviews per page 
        
        var reviewCount = this.props.length -1
        //divide by 10.
        //if perfect, just display that amount
        //if not perfect, add another page 
        if(reviewCount % 10 === 0) {
            var length = reviewCount/10;
        } else if (reviewCount < 10) {
            var length = 1;
        } else {

            var length = Math.ceil(reviewCount/10);
            
        }
    }

    var pages = []
    for (var i = 1; i < length + 1 ; i +=1 ){
        pages.push(i);
    }
    return (

      <div >
       { pages.map((page)=> {
           return <Page key={page} id={'a' + page} value={page} 
           onClick={() => this.props.handlePageChange(page, this.props.searchMode)}>{page}</Page>
       })
       }
       
      </div>
    );
  }
};

module.exports.Page=Page;
export default Pagination;