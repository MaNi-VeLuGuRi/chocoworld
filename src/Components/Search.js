import React,{ Component } from "react";
import { getSearch } from "../actions/actionCreators";
import { connect } from "react-redux"


 class Search extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.dispatch(getSearch(this.props.text));
      }
    
  
    render(){
        return(
            <div>
                {this.props.searchData.map(d => (
                <ul>
           
                     <li key={d.id}>
                         <br/>
                        Name: {d.name}
                         <br />
                        Description: {d.desc}
                     </li>
                    <img src={d.image} />
                </ul>))}
            </div>
        );
    }
 }

 function mapStateToProps(state){
     console.log(state);
     return({
        searchData: state.searchData,
         text:state.text
     })
 }

 export default connect(mapStateToProps)(Search)