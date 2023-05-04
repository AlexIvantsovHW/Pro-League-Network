import React from "react";
import s from "../Bottom/style.module.css";
import pictures from "../Pictures/pictures";

class BottomContainer extends React.Component {

  render() {
    return (
      <div className={s.container}>
        <div className={s.bottom_up}>
          <p>
            World Putting League is sanctioned by the{" "}
            <a href={pictures.bottom.links.USPMGA}>USPMGA</a> (US Pro MiniGolf
            Association) and produced by{" "}
            <a href={pictures.bottom.links.PLN}>Pro League Network</a>
          </p>
        </div>
        <div className={s.bottom_down}>
                <div className={s.contact_border}><a href={pictures.bottom.contact.link.instagram}><img src={pictures.bottom.contact.photo.instagram}/></a></div>
                <div><a href={pictures.bottom.contact.link.twiter}><img src={pictures.bottom.contact.photo.twiter}/></a></div>
                <div><a href={pictures.bottom.contact.link.facebook}><img src={pictures.bottom.contact.photo.facebook}/></a></div>
        </div>
      </div>
    );
  }
}

export default BottomContainer;
