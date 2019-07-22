import React, { Component } from "react";
import { getBrandDetail } from "../actions/actionCreators";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class BrandDetail extends Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.dispatch(getBrandDetail(this.props.match.params.id));
  }
  render() {
             return (
               <div>
                <p> helllo</p>
                  <div class="box column is-one-third is-multilines">
                       {console.log("//", this.props)}
                       {this.props.brandDetail.map(c => (
                      <div style={{
                        color:"black",
                        fontSize: "1em",
                        fontWeight:" 200",
                        lineHeight: "3"}}>
                        <h3>{c.name}</h3>
                        <img src={c.image} />
                      </div>
                  ))}       
                </div>
                </div>
                   );
                   
            }
}
function mapStateToProps(state) {
  console.log("///", state);
  return {
    brandDetail: state.brandDetail,
    isLoading: state.isLoading
  };
}
export default connect(mapStateToProps)(BrandDetail);

