import React,{useState} from 'react';
import {useSelector} from "react-redux";
import "./layout.css"
import LeftSide from "../components/leftSide";
import RightSide from "../components/rightSide";
import Routers from "../navigations/Routers";
import Profile from "../components/Profile";




function Layout({children}) {
    const customers=useSelector(state=>state.customerReducer);
    const [create,setCreate]=useState({situation:false});
    const [change,setChange]=useState(false);
    const [filter,setFilter]=useState("");
    const handleChange=()=>{
        setCreate({situation: !create.situation})
    };
    const updateSearch=(e)=>{
        setFilter(e.target.value)
    };
    const filterCustomers=customers.filter(item=>{
        return item.customerName.toLowerCase().indexOf(
            filter.toLowerCase()
        )!==-1
    });
    const sayfa1=()=>{
        return(
            <div className={"layout"}>
                <div>
                    <div className={"d-flex justify-content-between"}>
                        <div style={{width:"500px"}}  className={"search mt-5 mb-3 ml-5 d-flex justify-content-between"}>
                            <i style={{fontSize:"25px"}} className="fas fa-search mt-2"/>
                            <input value={filter} name={"filter"} onChange={updateSearch}
                                   className="form-control mr-sm-2 ml-3" type="search" placeholder="Search"
                            />
                        </div>
                        {
                            !create.situation && (
                                <button
                                    onClick={handleChange}
                                    className={"mt-5 mb-3 btn btn-warning"}>
                                    Create
                                </button>
                            )
                        }
                    </div>
                    <LeftSide
                        change={change}
                        setChange={setChange}
                        create={create.situation}
                        customers={filterCustomers}
                    />
                </div>
                <div>
                    {create.situation ? <RightSide setCreate={setCreate}/>:null}
                </div>
            </div>
        )

    };

    const sayfa2=()=>{
        return (
            <div className={"row mt-2"}>
                <div className="col-md-3">
                    <Profile setChange={setChange} />
                </div>
                <div  style={{backgroundColor:"lightgray"}} className="col-md-9">
                    <Routers/>
                </div>
            </div>
        )
    };

    return (
        <div>
            {
                !change ? sayfa1():sayfa2()
            }
        </div>

    );
}

export default Layout;
