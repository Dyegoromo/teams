import { useState } from "react";
import "./org-css.css";

/* props must be added as a parameter to access its value */

const MyOrg = (props) => {
  /*   const [show, updateShow] = useState(true);

  const handleClick = () => {
    updateShow(!show);
  }; */

  return (
    <section className="org-section">
      <h3 className="org-title">My Organization</h3>
      {/* The event listener (onClick) will "hear" the value in the props in the App code*/}
      <img src="/img/add.png" alt="Collapse buton" onClick={props.changeShow} />
    </section>
  );
};

export default MyOrg;
