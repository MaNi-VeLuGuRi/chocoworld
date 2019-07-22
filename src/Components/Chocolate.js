import React, { Component } from "react";
import { connect } from "react-redux";
import { getChocolats } from "../actions/actionCreators";
import { Link } from "react-router-dom";


class Chocolate extends Component {
  componentDidMount() {
    this.props.dispatch(getChocolats());
  }

  render() {
    return (
      <div>
        <h1>Chocolate List</h1>
        <div className = "columns is-multilines">
        <div className = "box column is-one-third">
        {this.props.chocolates.map(d => (
          <ul>
           
            <li key={d.id}>
              <Link to={`/chocolates/${d.id}`}> {d.name} </Link>
            </li>
            <>
              <img src={d.image} />
            </>
          </ul>
        ))}
        </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(State) {
  return {
    chocolates: State.chocolates,
    isLoading: State.isLoading
  };
}

export default connect(mapStateToProps)(Chocolate);