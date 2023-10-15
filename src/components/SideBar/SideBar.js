import "./SideBar.scss";
import { LeftMenuJson } from "./SideBar.config";
import { TbHexagonLetterO } from "react-icons/tb";
import { Link } from "react-router-dom";
import {BiChevronDown} from 'react-icons/bi'
const SideBar = () => {
  return (
    <div className="main-container inline-block overflow-auto h-screen text-white fixed">
      <div className="flex mb-10">
        <div className="dash-icon">
          <TbHexagonLetterO />
        </div>
        <h2 id="side-none">Dashboard</h2>
      </div>
      <div className="left-menu-list">
        <ul className="left-menu relative">
          {LeftMenuJson.map((object, index) => {
            return (
              <Link to={object?.name} key={index} className="no-underline">
                <div className="left-menu-data mt-6 mb-6 font-bold flex cursor-pointer">
                  <li className="w-1/5 fa-icon">{object?.faIcon}</li>
                  <div className="w-4/5 data flex justify-between">
                    <li id="side-none">{object?.name}</li>
                    <li className="text-lg" id="side-none">
                      {object?.forwardIcon}
                    </li>
                  </div>
                </div>
              </Link>
            );
          })}
          <div className="left-menu-data identity mt-6 mb-6 font-bold flex cursor-pointer absolute w-full" style={{bottom : '-100%'}}>
              <li className="w-1/5 photo"></li>
              <div className="w-4/5 data flex justify-between">
                <div>
                    <li id="side-none" className=" text-white">Evano</li>
                    <li id="side-none" className=" pt-1" style={{'font-size' : '10px'}}>Product Manager</li>
                </div>
                <li className="text-lg" id="side-none"><BiChevronDown/></li>
              </div>
            </div>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
