import React, {Component} from 'react';
import "./right.css"
import axios from "axios"
import alertify from "alertifyjs"

class RightSide extends Component {
    state={
        name:"",
        unvan:"",
        address:"",
        gsm:"",
        tc:"",
        email:"",
        password:"",
        not:"",
        option:"Gercek",
        select:""
    };
    handleChange= (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    validateForm=(e)=>{
        const {name,unvan,option,tc,select,not,address,gsm,email,password}=this.state;
        if (name===""|| unvan===""||option===""||select===""
            ||tc===""||not===""||address===""||gsm===""||
            email===""||password==="") {
            return false;
        }else {
            return true
        }
    };

    onSubmitHandler=async(e)=>{
        e.preventDefault();
        const {name,unvan,option,tc,select,not,address,gsm,email,password}=this.state;
        const newUser={
            customerName:name,
            img:"https://www.manzara.gen.tr/w1/hdr-fethiye-manzaralar.jpg",
            customerType:option,
            tckn_vkn:tc,
            adress:address,
            gsm:gsm,
            email:email,
            portalInfo:password,
            unvan: unvan,
            relatedFirm:select,
            not:not
        };
        if(!this.validateForm()){
            alertify.error("Boş alanları doldurunuz")
        }
        else {
            await axios.post("http://localhost:3000/users",newUser)
            window.location.reload();
        }
    };
    handleOptionChange=(e)=>{
        this.setState({
            option:e.target.value
        })
    };
    onSelect=(e)=>{
        this.setState({
            select:e.target.value
        })
    };
    clearAll=()=>{
        this.setState({
            name:"",
            unvan:"",
            address:"",
            gsm:"",
            tc:"",
            email:"",
            password:"",
            not:"",
            option:"Gercek",
            select:""
        })
    };
    closeCreate=()=>{
        this.props.setCreate({situation: false})
    };

    render() {
        const {name,unvan,select,tc,not,address,gsm,email,password}=this.state;
        return (
            <div className={"right"}>
                <span className={"icon"} onClick={this.closeCreate}>X</span>
                <h2>Create New Customer</h2>
                <form action="" onSubmit={this.onSubmitHandler}>
                    <div className={"form-group"}>
                        <label htmlFor="">Customer type</label>
                        <div className={"d-flex justify-content-space-around"}>
                            <div className={"d-flex justify-content-between"}>
                                <input style={{width:20,height:20}} type="radio"
                                       value={"Gercek"}
                                       checked={this.state.option==="Gercek"}
                                       onChange={this.handleOptionChange}
                                       className={"form-control"}/>
                                <span>Gerçek</span>
                            </div>
                            <div className={"d-flex justify-content-between"}>
                                <input style={{width:20,height:20,marginLeft:"30px"}}
                                       value={"Tuzel"} type="radio"
                                       onChange={this.handleOptionChange}
                                       checked={this.state.option==="Tuzel"}
                                       name={"type"} className={"form-control"}/>
                                <span>Tüzel</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input type={"text"}
                               maxLength={30}
                               value={name}
                               onChange={this.handleChange}
                               name={"name"}
                               className={"form-control"}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Unvan</label>
                        <input name={"unvan"}
                               maxLength={20}
                                  value={unvan}
                                  onChange={this.handleChange}
                                  className={"form-control"}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">GSM</label>
                        <input name={"gsm"}
                               maxLength={11}
                               type={"number"}
                               value={gsm}
                               onChange={this.handleChange}
                               className={"form-control"}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">E-mail</label>
                        <input type="email"
                               maxLength={30}
                               name={"email"}
                               value={email}
                               onChange={this.handleChange}
                               className={"form-control"}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Password</label>
                        <input type="password"
                               maxLength={25}
                               name={"password"}
                               value={password}
                               onChange={this.handleChange}
                               className={"form-control"}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">{this.state.option==="Gercek" ?"TCKN":"VKN"}</label>
                        <input name={"tc"}
                               maxLength={11}
                               type="number"
                               value={tc}
                               onChange={this.handleChange}
                               className={"form-control"}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">İlgili Firması</label>
                        <select className={"form-control"} onChange={this.onSelect} value={select}>
                            <option value={"choose"}>choose</option>
                            <option value={"A Firması"}>A Firması</option>
                            <option value={"B Firması"}>B Firması</option>
                            <option value={"C Firması"}>C Firması</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Select</label>
                        <input type="file"
                               className="form-control-file"/>
                    </div>
                    <div className={"form-group"}>
                        <label htmlFor=""> Address</label>
                        <input name={"address"}
                               maxLength={30}
                               type="text"
                               value={address}
                               onChange={this.handleChange}
                               className={"form-control"}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Not</label>
                        <textarea name={"not"}
                                  maxLength={50}
                                  value={not}
                                  onChange={this.handleChange}
                                  className={"form-control"}/>
                    </div>
                    <div>
                        <button type={"submit"} className={"btn btn-success btn-right"}>create</button>
                    </div>
                </form>
                <button onClick={this.clearAll} className={"btn btn-success btn-left"}>create another</button>
            </div>
        );
    }

}

export default RightSide;
