


export default function singleData(state=[],action) {
    switch(action.type){
        case "get_Data":
            return action.payload;
        default:
            return state
    }
}
