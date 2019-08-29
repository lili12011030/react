import * as types from "./types"
const reducer=(state,{type,payload})=>{
    switch(type){
        case types.VIEW_NAV:
            return {...state,bNav:payload}
        case types.VIEW_FOOT:
            return {...state,bFoot:payload}
        case types.VIEW_LOADING:
            return {...state,bLoading:payload}
        case types.UPDATE_HOME:
            return {...state,home:payload}
        case types.UPDATE_BANNER:
            return {...state,banner:payload}
        case types.UPDATE_COLUMN:
            return {...state,column:payload}
        case types.UPDATE_Follow:
            return {...state,follow:payload}
        case types.UPDATE_USER:

            window.localStorage.setItem("new_user",JSON.stringify(payload));
            return {...state,user:payload}
        case types.UPDATE_DETAIL:
            return {...state,detail:payload}

        default :
            return state
    }
    
}

export default reducer;



