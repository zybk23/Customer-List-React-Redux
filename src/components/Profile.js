import React from 'react';
import {useSelector} from "react-redux";
import "./profile.css"
import Map from "./Map";


const Profile = ({setChange}) => {
    const singleCustomer=useSelector(state=>state.singleDataReducer);
    return (
        <div>
            {
                singleCustomer.map((data,index)=>(
                    <div key={index} className={"taha"}>
                        <button
                            style={{float:"right"}}
                            onClick={()=>setChange(false)}
                            className={"btn btn-warning mr-3 mt-3"}
                        >
                            Müşteri Listesi
                        </button>
                        <div className={"d-flex justify-content-space-around top"}>
                            <img className={"img"} src={data.img} alt=""/>
                            <div className={"ml-4"}>
                                <p>{data.customerName}</p>
                                <p>{data.email}</p>
                            </div>
                        </div>
                        <div className={"middle"}>
                            <Map/>
                        </div>
                        <div  className={"bottom"}>
                            <h6>Customer Type : {data.customerType}</h6>
                            <p>{data.customerType ==="Gercek"?"TCKN":"VKN"} : {data.tckn_vkn}</p>
                            <p>Related Firma : {data.relatedFirm}</p>
                            <p>Telefon No : {data.gsm}</p>
                            <p>Not : {data.not}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Profile;
