import cl from "./Components.module.css";
// import icon from "../images/icon.svg";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Header({...props }) {
  return (
    <>
      <div className={cl.header}>
          <div className={cl.header_logo}>
            <h1>HACKER NEWS</h1>
          </div>
        <Button>Update news</Button>
      </div>
    </>
  );
}
