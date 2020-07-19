import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getCustomer} from "../redux/actions/customerAction";
import {getData} from "../redux/actions/customerAction";
import axios from "axios"
import "./left.css"



const LeftSide=({create,change,setChange,customers})=> {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getCustomer())
    },[]);

    const select=(ids)=>{
        const gelen=customers.filter(customer=>customer.id===ids);
        dispatch(getData(gelen))
    };
    const handleClick=()=>{
        setChange(true)
    };
    const deleteItem=async (ids)=>{
        await axios.delete(`http://localhost:3000/users/${ids}`);
        window.location.reload();
    };
    return (
        <div className={"left"}>
            <table className="table">
                <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Type</th>
                    <th>Related Firm</th>
                    <th>Address</th>
                    <th>GSM</th>
                    <th>Email</th>
                    <th>Portal Information</th>
                    {
                        !create && (
                            <>
                                <th></th>
                                <th></th>
                            </>
                        )
                    }
                </tr>
                </thead>
                {
                    customers.map((customer,index)=>(
                        <tbody key={index}>
                        <tr>
                            <td>{customer.customerName}</td>
                            <td>{customer.customerType}</td>
                            <td>{customer.relatedFirm}</td>
                            <td>{customer.adress}</td>
                            <td>{customer.gsm}</td>
                            <td>{customer.email}</td>
                            <td>{customer.portalInfo}</td>
                            {
                                !create && (
                                    <>
                                        <td><button onClick={()=>{ handleClick(); select(customer.id)}} className={"btn btn-success"}>Update</button></td>
                                        <td><button onClick={()=>deleteItem(customer.id)} className={"btn btn-danger"}>Delete</button></td>
                                    </>
                                )
                            }
                        </tr>
                        </tbody>
                    ))
                }

            </table>
        </div>
    );
};

export default LeftSide;
