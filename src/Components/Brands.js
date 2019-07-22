import React, { Component } from "react";
import { connect } from "react-redux";
import { getBrands, getBrandDetail } from "../actions/actionCreators";
import { Link } from "react-router-dom";
import BrandDetail from "./BrandDetail";

class Brands extends Component {
  componentDidMount() {
    this.props.dispatch(getBrands());
  }
  render() {
    return (<>
      <h1>Brands List</h1>
       <div className="columns is-multiline"
       style={{marginTop: "10px",
       marginTop: "10px",
       marginLeft: "50px",
       padding: "69px"}}>

       
           {this.props.brands.map(d => (
          <div key={d.id} style={{ margin: "10px", 
          border: "2px solid blue"}}>
          <img src={d.logo} style={{width: "250px",
           height: "250px"}}/>
           

        <div style={{fontWeight: "bold",
        marginLeft: "50px"}}>
       <Link to={`/brand/${d.id}`}> {d.name} </Link>
       </div>
          </div>
        ))}
      </div>
    </>);
  }
}
function mapStateToProps(State) {
  return {
    brands: State.brands,
    isLoading: State.isLoading
  };
}
export default connect(mapStateToProps)(Brands);