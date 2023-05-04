import React from "react";
import s from '../Header/style.module.css'
import pictures from "../Pictures/pictures";

class HeaderContainer extends React.Component{
links={
    Home:'https://alexivantsovhw.github.io/Pro-League-Network/',
    EVENT:'http://theworldputtingleague.com/format.html',
    PLAYERS:'http://theworldputtingleague.com/players.html',
    PAST_RES:'http://theworldputtingleague.com/past.html',
    STREAM:'https://watch.proleaguenetwork.com/'
}
    render(){
        return (
            <div className={s.container}>
                <div className={s.sub_left}>
                 <img src={pictures.header.logo}/>
                </div>
                <div className={s.sub_right}>
                   <a href={this.links.Home}><h4 className={s.link}>HOME</h4></a> 
                   <a href={this.links.EVENT}><h4 className={s.link}>WPL EVENT #2, 4/20</h4></a> 
                   <a href={this.links.PLAYERS}><h4 className={s.link}>PLAYERS</h4></a> 
                   <a href={this.links.PAST_RES}> <h4 className={s.link}>PAST RESULTS</h4></a> 
                   <a href={this.links.STREAM}> <h4 className={s.link}>LIVE STREAM</h4></a> 
                    
                </div>
            </div>
        )
    }
}

export default HeaderContainer;