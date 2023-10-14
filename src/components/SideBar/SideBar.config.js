import {  IoIosArrowForward } from "react-icons/io";
import {TbHelpHexagon} from 'react-icons/tb';
import {RiCustomerService2Fill} from 'react-icons/ri'
import {BsFillArchiveFill} from 'react-icons/bs'
import {AiFillProfile} from 'react-icons/ai'
import {FaMoneyCheckDollar , FaRegFaceSmileBeam} from 'react-icons/fa6'
export const LeftMenuJson=[
    {name:'Dashboard' , 'faIcon':<BsFillArchiveFill/>},
    {name:'Product' , 'forwardIcon':<IoIosArrowForward/> , 'faIcon':<AiFillProfile/>},
    {name:'Customers' , 'forwardIcon':<IoIosArrowForward/> , 'faIcon':<RiCustomerService2Fill/>},
    {name:'Income' , 'forwardIcon':<IoIosArrowForward/> , 'faIcon':<FaMoneyCheckDollar/>},
    {name:'Promote' , 'forwardIcon':<IoIosArrowForward/> , 'faIcon':<FaRegFaceSmileBeam/>},
    {name:'Help' , 'forwardIcon':<IoIosArrowForward/> , 'faIcon':<TbHelpHexagon/>}
]