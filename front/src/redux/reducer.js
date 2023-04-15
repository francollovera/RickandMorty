import {
    ADD_FAVORITE,
    CLEAN_DETAIL,
    GET_CHARACTER_DETAIL,
    REMOVE_FAVORITE,
    GET_FAVORITE,
} from './actions';

const initialState = {
    myFavorites : [],
    charcaterDetail : {},
};

const rootReducer = ( state = initialState, action) =>{
    switch (action.type){
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
            };

            case CLEAN_DETAIL:
            return {
                ...state,
                charcaterDetail:{},
            };
              case GET_CHARACTER_DETAIL:
            return {
                ...state,
                charcaterDetail: action.payload ,
            };
            case GET_FAVORITE:
                return {
                    ...state,
                    charcaterDetail: {} ,
                };
              case REMOVE_FAVORITE:
            return {
                ...state,
                myFavorites : state.myFavorites.filter(
            (char) => char.id !== action.payload
                ) ,
            };
            default:
                return {...state};
    };
};

export default rootReducer;