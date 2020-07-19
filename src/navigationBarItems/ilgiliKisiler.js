import React,{useState} from 'react';
import "./ilgiliKisiler.css"
import {useSelector} from "react-redux";
import axios from "axios"



const IlgiliKisiler = (props) => {
    const singleCustomer=useSelector(state=>state.singleDataReducer);
    const [customer,setCustomer]=useState({...singleCustomer[0]});
    const handleUpdate=(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        setCustomer(previousCustomer=>(
            {
            ...previousCustomer,
                [name]:value
        }
        ))
    };
    const handleSubmitUpdate= async (ids)=>{
        await axios.put(`http://localhost:3000/users/${ids}`,customer);
        window.location.reload();
    };
    return (
        <div className={"container mt-5"}>
            <form id={"form"} action="">
                <div className="form-group">
                    <label htmlFor="">Ad Soyad</label>
                    <input type="text"
                           className={"ml-3"}
                           name={"customerName"}
                           value={customer.customerName}
                           onChange={handleUpdate} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Rol</label>
                    <select className={"ml-3"}>
                        <option value="">User</option>
                        <option value="">Admin</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">GSM</label>
                    <input
                        type="number" className={"ml-3"}
                        name={"gsm"}
                        value={customer.gsm} onChange={handleUpdate}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">E-mail Address</label>
                    <input type="email"  className={"ml-3"}
                           name={"email"}
                           value={customer.email} onChange={handleUpdate}
                    />
                </div>
            </form>
            <button onClick={()=>handleSubmitUpdate(customer.id)}
                    type={"submit"}
                    className={"btn btn-primary"}
            >
                Güncelle
            </button>
        </div>
    );
};

export default IlgiliKisiler;
