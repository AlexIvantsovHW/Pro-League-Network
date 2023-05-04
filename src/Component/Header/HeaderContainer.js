import React from "react";
import s from '../Header/style.module.css'
import pictures from "../Pictures/pictures";

class HeaderContainer extends React.Component{

    render(){
        return (
            <div className={s.container}>
                <div className={s.sub_left}>
                 <img src={pictures.header.logo}/>
                </div>
                <div className={s.sub_right}>
                    <h4 className={s.link}>HOME</h4>
                    <h4 className={s.link}>WPL EVENT #2, 4/20</h4>
                    <h4 className={s.link}>PLAYERS</h4>
                    <h4 className={s.link}>PAST RESULTS</h4>
                    <h4 className={s.link}>LIVE STREAM</h4>
                    
                </div>
            </div>
        )
    }
}

export default HeaderContainer;