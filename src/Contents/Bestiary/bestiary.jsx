import React from "react";
import s from "./bestiary.module.css"
import { Route, Routes } from "react-router-dom";
import MenuBestiary from './MenuBestiary/menuBestiary';
import ContentsBestiary_1 from './ContentsBestiary/contentsBestiary_1';
import ContentsBestiary_2 from './ContentsBestiary/contentsBestiary_2';
import ContentsBestiary_3 from './ContentsBestiary/contentsBestiary_3';
import ContentsBestiary_4 from './ContentsBestiary/contentsBestiary_4';
import ContentsBestiary_5 from './ContentsBestiary/contentsBestiary_5';
import ContentsBestiary_6 from './ContentsBestiary/contentsBestiary_6';
import ContentsBestiary_7 from './ContentsBestiary/contentsBestiary_7';
import ContentsBestiary_8 from './ContentsBestiary/contentsBestiary_8';
import ContentsBestiary_9 from './ContentsBestiary/contentsBestiary_9';
import ContentsBestiary_10 from './ContentsBestiary/contentsBestiary_10';
import ContentsBestiary_11 from './ContentsBestiary/contentsBestiary_11';
import ContentsBestiary_12 from './ContentsBestiary/contentsBestiary_12';
import ContentsBestiary_13 from './ContentsBestiary/contentsBestiary_13';
import ContentsBestiary_14 from './ContentsBestiary/contentsBestiary_14';
import Clouds from "./Clouds/clouds";




const Bestiary = (props) => {
    return (
        <div className={s.bestiary}>

            <Clouds />
            <div className={s.fon}>


                <MenuBestiary />
                <Routes>
                    <Route path="/" element={<ContentsBestiary_1 />} />
                    <Route path="bes2/" element={<ContentsBestiary_2 />} />
                    <Route path="bes3/" element={<ContentsBestiary_3 />} />
                    <Route path="bes4/" element={<ContentsBestiary_4 />} />
                    <Route path="bes5/" element={<ContentsBestiary_5 />} />
                    <Route path="bes6/" element={<ContentsBestiary_6 />} />
                    <Route path="bes7/" element={<ContentsBestiary_7 />} />
                    <Route path="bes8/" element={<ContentsBestiary_8 />} />
                    <Route path="bes9/" element={<ContentsBestiary_9 />} />
                    <Route path="bes10/" element={<ContentsBestiary_10 />} />
                    <Route path="bes11/" element={<ContentsBestiary_11 />} />
                    <Route path="bes12/" element={<ContentsBestiary_12 />} />
                    <Route path="bes13/" element={<ContentsBestiary_13 />} />
                    <Route path="bes14/" element={<ContentsBestiary_14 />} />
                </Routes>
            </div>
        </div >




    )
}








export default Bestiary;
