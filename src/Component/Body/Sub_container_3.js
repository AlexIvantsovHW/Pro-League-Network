import React from "react";
import s from "../Body/style.module.css";
import pictures from "../Pictures/pictures";

const Sub_container_3 = () => {
  return (
    <div className={s.sub_container_3}>
      <div className={s.left}>
        <div>
          <h1>Recap Of World Putting League Event</h1>
          <h2>
            Hawaii Rumble in Myrtle Beach, South Carolina, <br /> February
            27-28, 2023.
          </h2>
        </div>
        <div className={s.sub_container_3_left_letter}>
          <p>
            These athletes devote countless hours to perfect their game and{" "}
            <br />
            finally had their chance to showcase their talents to the
            world.There
            <br />
            couldn't be a better inaugural champion than Gary Hester, a mainstay{" "}
            <br />
            at USPMGA events for decades.
          </p>

          <h4> Bob Detwiler, USPMGA Commissioner</h4>
        </div>
        <div>
          <p>
            US National Mini Golf Team member Gary Hester (+550 field) won the
            inaugural World
            <br />
            Putting League Championship at Hawaiian Rumble Minigolf in Myrtle
            Beach, S.C. after
            <br />
            shooting a final round 31 for 5 under par to defeat Matt McCaslin
            (33, 3 under par; +190 <br />
            pre-tournament to win) and take home the $5,000 championship purse.
            <br /> <br />
            Hester finished the Day 1 qualifying rounds by shooting 32 (-4) and
            31 (-5), respectively,
            <br />
            to combine for 9 under par and the No. 2 seed heading into the Day 2
            match play bracket. <br />
            After Day 1, Hester’s odds to win moved to +420.
            <br />
            Hester defeated Rick Alessi with a 35 (-1) in the quarterfinals
            before squeaking by Joey <br />
            Graybeal in the semifinals by one stroke, 32 (-4) to 33 (-3).
            Graybeal entered the Day 2 <br />
            quarterfinals as the top seed (-350 to win after Day 1) after pacing
            the field with a <br />
            combined -9 in the two qualifying rounds.
          </p>
        </div>
      </div>
      <div>
        <img src={pictures.body.WPL_photo} />
      </div>
    </div>
  );
};

export default Sub_container_3;
