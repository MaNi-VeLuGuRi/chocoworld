import React, { Component } from "react";
import { connect } from "react-redux";
import { getLogin, input_change } from "../actions/actionCreators";
 
    function Login(props) {
    const handleChange = name => e => {
    props.dispatch(input_change(name, e.target.value));
    };
            const handleSubmit = e => {
 // e.preventDefalut();
            const { email, password } = props;
            const body = { email, password };
            props.dispatch(getLogin(body));
            };
 return (
        
        <div>
        <form onSubmit={handleSubmit}>
        <h1 has-text-centered>LogIn </h1>
        <label>User Name:
        <input
        type="email" className="input"
        value={props.email}
        onChange={handleChange("email")}
        />
        </label>
        
 
        <label>Password:
        <input
        type="password" className="input"
        value={props.password}
        onChange={handleChange("password")}
        /></label>
        <br />
        <br/>
        <button type="submit" className="button is-info">Login</button>
        </form>

        </div>

        
        );
}
 
function mapStateToProps(state) {
 return {
        email: state.email,
        password: state.password,
        isLoading: state.isLoading
        };
}
 
export default connect(mapStateToProps)(Login);