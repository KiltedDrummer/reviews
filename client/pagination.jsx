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
const Back = styled.button`
    background-color: transparent;
    border-color: #008489;
    border-width: 0 2px 2px 0; 
    padding: 6px;
    margin: 10px 0 6px 125px;
    vertical-align: middle;    
    transform: rotate(135deg);
    flex-grow: 0;
    z-index: 1;
    position: absolute;
`
const Forward = styled.button`
    border-color: #008489;
    border-width: 0 2px 2px 0;
    padding: 6px;
    vertical-align: middle; 
    transform: rotate(315deg);
    flex-grow: 0;
    z-index: 1;
    position: absolute;
    margin-left: 20px;
    margin-top: 12px;
`
const Fcircle = styled.div`
    height: 29px;
    width: 31px;
    verticle-align: middle;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid #008489;
    position: relative;
    display: inline-block;
    margin-bottom: -10px;
    margin-left: 13px;
      
`
const Circle = styled.div`
    height: 30px;
    width: 30px;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid #008489;
    margin-top: 1px;
    position: absolute;
    margin-left: 112px;   
`
const PageContainer = styled.div`
    position: relative;
    margin-left:160px;
    margin-top: -2px 
`

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages:[], //default for not searchM is [1,2,3,4,5]
            //whenever someone queries, it should set this state
            //could come in as props

            //want this to come in from index.jsx
            //default would be the [1,2,3,4,5]
            //but if its coming in after a query it would need to feed in the 
            //appropriate array
        }
    }

handleForwardClick(){
    //needs to tell handlePageChange the appropriate things 
    
    if(!this.props.searchMode) {
        var newPages = this.state.pages.map((page)=>{return page + 1})
        console.log(newPages);
        this.setState({pages:newPages})
        this.props.handlePageChange(this.props.currentPage + 1, this.props.searchMode) //we need to know what page we're on...

    } 
    
    else {
        console.log("we")
        var newPages = this.state.pages.map((page)=>{return page + 1})
        this.setState({pages:newPages})
        this.props.handlePageChange(this.props.currentPage + 1, this.props.searchMode)
    }
}
componentWillMount(){ 
    console.log("props", this.props)
    if(!this.props.searchMode) { 
        //simply telling this component how many 
        //pages it will need to render 
    this.setState({pages:[1,2,3,4,5]})
    }
}  
  render() {
    return (
      <div>
        <Back />
        <Circle/> 
        <PageContainer >
          
            { this.state.pages.map((page)=> {
                return <Page key={page} id={'a' + page} value={page} 
                onClick={() => this.props.handlePageChange(page, this.props.searchMode)}>{page}</Page>
            })
            }
            <Forward onClick={this.handleForwardClick.bind(this)}/>
            <Fcircle onClick={this.handleForwardClick.bind(this)}/>
        </PageContainer>
      </div>
    );
  }
};


export default Pagination;