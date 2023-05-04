import React from "react";
import s from "../Body/style.module.css";
import pictures from "../Pictures/pictures";

const Sub_container_4 = () => {
  return (
    <div className={s.sub_container_4}>
      <div className={s.sub}>
        <div className={s.subImg}>
         <a href={pictures.body.users.BRIAN_KATREK.link}><img src={pictures.body.users.BRIAN_KATREK.ava} /></a> 
        </div>
        <div className={s.user}>
          <h1>{pictures.body.users.BRIAN_KATREK.name}</h1>
          <h2>{pictures.body.users.BRIAN_KATREK.status}</h2>
        </div>
      </div>

      <div className={s.sub}>
        <div className={s.subImg}>
          <a href={pictures.body.users.ROB_PIZZOLA.link}>
          <img src={pictures.body.users.ROB_PIZZOLA.ava} />
          </a>
        </div>
        <div className={s.user}>
          <h1>{pictures.body.users.ROB_PIZZOLA.name}</h1>
          <h2>{pictures.body.users.ROB_PIZZOLA.status}</h2>
        </div>
      </div>

      <div className={s.sub}>
        <div className={s.subImg}>
          <a href={pictures.body.users.KAZ_BROWN.link}>
          <img src={pictures.body.users.KAZ_BROWN.ava} />
          </a>
          
        </div>
        <div className={s.user}>
          <h1>{pictures.body.users.KAZ_BROWN.name}</h1>
          <h2>{pictures.body.users.KAZ_BROWN.status}</h2>
        </div>
      </div>
    </div>
  );
};

export default Sub_container_4;
