


export default function customerReducer(state=[], action) {
    switch (action.type) {
        case "get_customer":
            return action.payload;
        default:
            return state
    }
}
