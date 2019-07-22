import React, { Component } from "react";
import { getChocolatesDesc } from "../actions/actionCreators";
import { connect } from "react-redux";
import { stat } from "fs";
 
class ChocolateDesc extends Component {
 componentDidMount() {
 console.log("didMount*********",this.props);
 this.props.dispatch(getChocolatesDesc(this.props.match.params.id));
 }
 
 render() {
 return (
 <div>     
         <h1>ChocolateDescription</h1>
                    <br />
                    <div className = "column is-multilines">        
         <h5>{this.props.ChocolateDetails.name}</h5>
         <h6>{this.props.ChocolateDetails.desc}</h6>
                    <br />

         <img src={this.props.ChocolateDetails.image} />
 </div>
 </div>
 );
 }
}
 
         function MapStateToProps(state) {
         console.log("StateMap*******************", state);
         return {
            ChocolateDetails: state.ChocolateDetails,
         isLoading: state.isLoading
 };
}
 
export default connect(MapStateToProps)(ChocolateDesc);