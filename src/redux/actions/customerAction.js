

export const getCustomerSuccess=(data)=>{
    return {type:"get_customer",payload:data}
};

export const getCustomer=()=>{
    return function (dispatch) {
        let url="http://localhost:3000/users";

        return fetch(url)
            .then(response=>response.json())
            .then(result=>dispatch(getCustomerSuccess(result)))
    }
};

export const getData=(data)=>{
    return {type:"get_Data",payload:data}
};
