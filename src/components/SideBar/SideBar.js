import './SideBar.scss'
import {LeftMenuJson} from './SideBar.config'
import {TbHexagonLetterO} from 'react-icons/tb'
import { Link } from 'react-router-dom'
const SideBar=()=>{
    return (
        <div className="main-container inline-block fixed overflow-auto h-screen text-white fixed">
            <div className="flex mb-10">
                <div className='dash-icon'><TbHexagonLetterO/></div>
                <h2>Dashboard</h2>
            </div>
            <div className="left-menu-list">
                <ul className="left-menu">
                    {
                        LeftMenuJson.map((object,index)=>{
                            return <Link to={object?.name} key={index} className='no-underline'>
                                <div className="left-menu-data mt-6 mb-6 font-bold flex cursor-pointer">
                                        <li className='w-1/5 fa-icon'>{object?.faIcon}</li>
                                        <div className='w-4/5 data flex justify-between'>
                                            <li>{object?.name}</li>
                                            <li className='text-lg'>{object?.forwardIcon}</li>
                                        </div>
                                    </div>
                                </Link>
                            })
                    }        
                </ul>
            </div>
        </div>
    )
}

export default SideBar