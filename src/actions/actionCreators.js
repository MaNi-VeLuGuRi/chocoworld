import {
    GET_BRANDS,
    GET_BRANDS_SUCCESS,
    GET_BRANDS_FAILURE,
    GET_BRANDDETAIL,
    GET_BRAND_DETAIL_SUCCESS,
    GET_BRANDDETAIL_FAILURE,

    GET_CHOCOLATES,
    GET_CHOCOLATES_SUCCESS,
    GET_CHOCOLATES_FAILURE,
    GET_CHOCOLATE_DESC,
    GET_CHOCOLATE_DESC_SUCCESS,
    GET_CHOCOLATE_DESC_FAILURE,

    GET_LOGIN,
    GET_LOGIN_FAILURE,
    GET_LOGIN_SUCCESS,

    GET_SIGNUP,
    GET_SIGNUP_FAILURE,
    GET_SIGNUP_SUCCESS,

    INPUT_CHANGE,

    GET_SEARCH,
    GET_SEARCH_FAILURE,
    GET_SEARCH_SUCCESS

  } from "./actionTyps";

    export function input_change(fieldName, fieldValue) {
      return { type: INPUT_CHANGE, fieldName, fieldValue };
    }
      
    export function getSignup(body) {
      return { type: GET_SIGNUP, body };
    }
      
    export function getSignupSuccess(user) {
      return { type: GET_SIGNUP_SUCCESS, user };
    }
      
    export function getSignupFailure(error) {
      return { type: GET_SIGNUP_FAILURE, error };
    }
      


    export function getLogin(body) {
      return { type: GET_LOGIN, body };
    }
      
    export function getLoginSuccess(user) {
      return { type: GET_LOGIN_SUCCESS, user };
    }
      
    export function getLoginFailure(error) {
      return { type: GET_LOGIN_FAILURE, error };
    }

    
    export function getChocolats() {
      return { type: GET_CHOCOLATES };
    }
    
    export function getChocolatsSuccess(chocolates) {
      return { type: GET_CHOCOLATES_SUCCESS, chocolates };
    }
    
    export function getChocolatesFailure(error) {
      return { type: GET_CHOCOLATES_FAILURE, error };
    }
    
    export function getChocolatesDesc(id) {
  
      return { type: GET_CHOCOLATE_DESC ,id};
    }
    export function getChocolatesDescSuccess(ChocolateDetails) {
      return { type: GET_CHOCOLATE_DESC_SUCCESS, ChocolateDetails };
    }
    export function getChocolatesDescFailure(error) {
      return { type: GET_CHOCOLATE_DESC_FAILURE, error };
    }
    


    export function getBrands() {
      return { type: GET_BRANDS };
    }
    
    export function getBrandsSuccess(brands) {
      return { type: GET_BRANDS_SUCCESS, brands };
    }
    
    export function getBrandsFailure(error) {
      return { type: GET_BRANDS_FAILURE, error };
    }
    
    export function getBrandDetail(id) {
      return { type: GET_BRANDDETAIL, id };
    }
    
    
    
    export function getBrandDecSucces(brandDetail) {
      return { type: GET_BRAND_DETAIL_SUCCESS, brandDetail };
    }
    
    export function getBrandDetailFailure(error) {
      return { type: GET_BRANDDETAIL_FAILURE, error };
    }

//search


      export function getSearch(text) {
        console.log(text)
        return { type: GET_SEARCH, text };
      }
        
      export function getSearchSuccess(searchData) {
        return { type: GET_SEARCH_SUCCESS, searchData };
      }
        
      export function getSearchFailure(error) {
        return { type: GET_SEARCH_FAILURE, error };
      }