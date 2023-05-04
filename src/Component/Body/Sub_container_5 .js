import React from "react";
import s from "../Body/style.module.css";
import pictures from "../Pictures/pictures";

const Sub_container_5 = () => {
  return (
    <div className={s.sub_container_5}>
      <div className={s.sub_container_5_main}>
        <div className={s.sub_container_5_left}>
          <div className={s.sub_container_5_left_sub}>
          <h1>{pictures.body.users.GARY_HESTER.status}</h1>
          <h2>{pictures.body.users.GARY_HESTER.name}</h2>
          <h3>North Carolina</h3>
          <p>
            Teeing off his Mini Golf career in 1969, Gary has over 50 years of
            experience in the sport. He started at the Arnold Palmer Mini Golf
            course in High Point, NC, where he took home four straight
            championships.
            <br />
            In the USPMGA Masters, he has won multiple senior divisions and has
            registered 11 top ten and two second place finishes in the main
            draw. Gary has also represented the US National Mini Golf Team at
            the World Mini Golf Championships for the last few years. In Sweden
            he finished as the top American and finished third overall.
          </p>
          </div>
          
        </div>
        <div className={s.sub_container_5_right}>
          <a href={pictures.body.users.GARY_HESTER.link}>
          <img src={pictures.body.users.GARY_HESTER.ava} />  
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Sub_container_5;
