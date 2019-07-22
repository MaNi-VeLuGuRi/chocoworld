import { put } from"redux-saga/effects";
import { getLoginSuccess, getLoginFailure }  from"../actions/actionCreators";
 
export function*loginSaga(action) {
const body= {
email:action.body.email,
password:action.body.password
 };
console.log("saga", action.body);
try {
    debugger
        const submitresponse=yield fetch(`http://localhost:4000/users?email=${body.email}&password=${body.password}`
        );
        const postResponse=yield submitresponse.json();
            if (postResponse.length) {
                alert ("login success");
                yield put(getLoginSuccess(postResponse));
            } 
            else {
                    throw"please enter valid details";
            }
 }      
  catch (err) {
//yield put(getLoginFailure(err));
        alert(err);
 }
}