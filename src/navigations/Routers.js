import React from 'react';
import {Switch,Route} from "react-router-dom"
import Navigation from "./Navigation";
import Aramalar from "../navigationBarItems/aramalar";
import IlgiliKisiler from "../navigationBarItems/ilgiliKisiler";
import BakimAjandasi from "../navigationBarItems/bakim_ajandasi";
import Cari from "../navigationBarItems/cari";
import FaturaBilgisi from "../navigationBarItems/fatura_bilgisi";
import Siparisler from "../navigationBarItems/siparisler";
import Urunler from "../navigationBarItems/urunler";
import Ziyaretler from "../navigationBarItems/ziyaretler";
import Ayricaliklar from "../navigationBarItems/ayricaliklar";


const Routers = () => {
    return (
        <div>
            <Navigation/>
            <Switch>
                <Route exact path={"/arama"} component={Aramalar} />
                <Route exact path={"/"} component={IlgiliKisiler} />
                <Route exact path={"/bakim"} component={BakimAjandasi} />
                <Route exact path={"/cari"} component={Cari} />
                <Route exact path={"/fatura"} component={FaturaBilgisi} />
                <Route exact path={"/urun"} component={Urunler} />
                <Route exact path={"/ziyaret"} component={Ziyaretler} />
                <Route exact path={"/siparis"} component={Siparisler} />
                <Route exact path={"/ayricalik"} component={Ayricaliklar} />
            </Switch>
        </div>
    );
};

export default Routers;
