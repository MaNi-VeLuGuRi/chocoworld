import produce from "immer";
import {
  GET_CHOCOLATES,
  GET_CHOCOLATES_SUCCESS,
  GET_CHOCOLATES_FAILURE,
  GET_BRANDS,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_FAILURE,
  GET_BRANDDETAIL,
  GET_BRAND_DETAIL_SUCCESS,
  GET_BRANDDETAIL_FAILURE,
  GET_BRANDDEC_SUCCESS,
  GET_CHOCOLATE_DESC,
  GET_CHOCOLATE_DESC_SUCCESS,
  GET_SIGNUP,
  GET_SIGNUP_FAILURE,
  GET_SIGNUP_SUCCESS,
  INPUT_CHANGE,
  GET_SEARCH,
  GET_SEARCH_FAILURE,
  GET_SEARCH_SUCCESS,
  GET_LOGIN,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILURE
} from "../actions/actionTyps";

const applicationState = {
  chocolates: [],
  brands: [],
  brandDetail: [],
  ChocolateDetails:[],
  isLoading: false,
  searchData:[],
  text:''
};

export default function rootReducer(state = applicationState, action) {
  console.log(state, action);
  return produce(state, draft => {
    switch (action.type) {
      case GET_CHOCOLATES:
        draft.isLoading = true;
        break;
        case GET_CHOCOLATE_DESC:
          draft.isLoading=true;
          break;
          case GET_CHOCOLATE_DESC_SUCCESS:
            draft.ChocolateDetails=action.ChocolateDetails;
            break;
      case GET_CHOCOLATES_SUCCESS:
        draft.isLoading = false;
        draft.chocolates = action.chocolates;
        break;
      case GET_CHOCOLATES_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;
      case GET_BRANDS:
        draft.isLoading = true;
        break;
      case GET_BRANDS_SUCCESS:
        
        draft.isLoading = false;
        draft.brands = action.brands;
        break;
      case GET_BRANDS_FAILURE:
        draft.isLoading = false;
        draft.brands = action.error;
        break;

      case GET_BRANDDETAIL:
        draft.isLoading = true;
        break;

      case GET_BRAND_DETAIL_SUCCESS:
        

        draft.isLoading = false;
        draft.brandDetail = action.brandDetail;
        break;
      // case GET_BRAND_DETAIL_SUCCESS:
      //   debugger;
      //   draft.isLoading = false;
      //   draft.brandDetail = action.brandDetail;
      //   break;

      case GET_BRANDDETAIL_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;

        case GET_SIGNUP:
          draft.isLoading = true;
          draft.body = action.body;
          break;
          case GET_SIGNUP_SUCCESS:
          draft.isLoading = false;
          draft.user = action.user;
          //draft.brandDetail = action.brandDetail;
          break;
          case GET_SIGNUP_FAILURE:
          draft.isLoading = false;
          draft.error = action.error;
          break;
          case INPUT_CHANGE:
          draft[action.fieldName] = action.fieldValue;
          break;


        case GET_SEARCH:
        draft.isLoading = true;
        draft.text = action.text;
        break;
      
        case GET_SEARCH_SUCCESS:
        draft.isLoading = false;
        draft.searchData = action.searchData;
        break;

        case GET_SEARCH_FAILURE:        
        draft.isLoading = false;
        draft.searchData = action.error;
        break;



        
        case GET_LOGIN:
        draft.isLoading = true;
        draft.body = action.body;
        break;
      
        case GET_LOGIN_SUCCESS:
        draft.isLoading = false;
        draft.user = action.user;
        break;

        case GET_LOGIN_FAILURE:        
        draft.isLoading = false;
        draft.searchData = action.error;
        break;
    
    }
  });
}
