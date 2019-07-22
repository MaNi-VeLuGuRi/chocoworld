import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { getSearch, input_change } from "../actions/actionCreators";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
// import "";

function NavBar(props) {
  const handleChange = name => e => {
    e.preventDefault();
    props.dispatch(input_change(name, e.target.value))
  }
 

  const handleSubmit = e => {
    e.preventDefault();
    console.log(props);
    props.history.push("/search");
  }
  return (
    <nav>
      <div class="head">
          <NavLink
            to="/"
            exact
          >
            <label class="textCol">Home</label>
          </NavLink>
          
          <NavLink
            to="/login"
            exact
          >
             <label class="textCol">Login</label>
          </NavLink>
      
          <NavLink
            to="/signup"
            exact
          >
            <label class="textCol">SignUp</label>
          </NavLink>
        
          <NavLink
            to="/brands"
            exact
          >
            <label class="textCol">Brands</label>
          </NavLink>
      
          <NavLink
            to="/chocolate" 
            exact
          >
            <label class="textCol">Chocolates List</label>
          </NavLink>
            
           <form >
            <input type ="text" class="search" placeholder="seach..."
             value={props.text}
          onChange={handleChange("text")}
          />
          <button type="submit" onClick={handleSubmit}>Search</button>
           </form> 
          
      
      </div>
    </nav>
  );
}
function mapStateToProps(state) {
  return {
         text: state.text
         };
 }
export default withRouter(connect(mapStateToProps)(NavBar))