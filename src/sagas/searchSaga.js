import { put } from "redux-saga/effects";
import { getSearchSuccess, getSearchFailure } from "../actions/actionCreators";

export function* getSearchData(action){
try{
    
    console.log(action);
    
    let chocolateResponse = yield fetch(`http://localhost:4000/chocolates`);
    let chocolates = yield chocolateResponse.json();
    let data = [];
    let searchData = chocolates.filter(choco => {
        console.log(choco);
        Object.keys(choco).some(text =>{
            if(JSON.stringify(choco[text]).includes(action.text)){
                data.push(choco);
            }
        })
    });
    console.log(data);
    let searchObj = {};
    let filterdData = data.filter(match => !searchObj[match.id] && (searchObj[match.id]=true));
    console.log(filterdData);
    yield put(getSearchSuccess(filterdData));
} 
catch(error){
    alert("chocolate does not exist")

    yield put(getSearchFailure(error));
}
}