
import React, { Component } from "react";
import { input_change, getSignup } from "../actions/actionCreators";
import { connect } from "react-redux";
 
        function SignUp(props) {
        const handleChange = name => e => {
        props.dispatch(input_change(name, e.target.value));
        };
        const handleSubmit = e => {
        // e.preventDefalut();
        const { firstName, lastName, email, password } = props;
        const body = { firstName, lastName, email, password };
        props.dispatch(getSignup(body));
        };
 
                return (
                // <div><br/></div>
                // <center>
               
                    <form onSubmit={handleSubmit}>
                    <h1 class="has-text-centered">Sign Up</h1>
                    <label>First Name:</label>
                    <input
                    type="text" className="input"
                    value={props.firstName}
                    onChange={handleChange("firstName")}
                    />
                
                        <label>Last Name:</label>
                        <input
                        type="text" className="input"
                        value={props.lastName}
                        onChange={handleChange("lastName")}
                        />
                <br />
                        
                        <label>Email:</label>
                        <input
                        type="email" className="input"
                        value={props.email}
                        onChange={handleChange("email")}
                        />
                        <br />
                        <label>Password:</label>
                        <input
                        type="password" className="input"
                        value={props.password}
                        onChange={handleChange("password")}
                        />
                        <br />
                        <br/>
                        <button type="submit" className="button is-info" >Signup</button>
                        </form>
                        
                     
                        // </center>
                        );
                        }
                
        function mapStateToProps(state) {
        return {
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                password: state.password,
                isLoading: state.isLoading
        };
}                
export default connect(mapStateToProps)(SignUp);