import './common.scss'
import {AiOutlineDollarCircle} from 'react-icons/ai'
import {CiViewList} from 'react-icons/ci';
import {MdOutlineAccountBalanceWallet} from 'react-icons/md'
import {SlHandbag} from 'react-icons/sl'

const data = [
    {'name':'Earning' , 'price':'$198k' , 'incre-decre':37.8 , 'time':'this month' , 'faIcon':<AiOutlineDollarCircle/> , 'bg-color':'#DDFFEE' , 'color':'#00A848'},
    {'name':'Orders' , 'price':'$2.4k' , 'incre-decre':2 , 'time':'this month' , 'faIcon':<CiViewList/> , 'bg-color':'#E7DBFF' , 'color':'#A711FF'},
    {'name':'Balance' , 'price':'$2.4k' , 'incre-decre':2 , 'time':'this month' , 'faIcon':<MdOutlineAccountBalanceWallet/> , 'bg-color':'#CCF2FF' , 'color':'#0E5EC2'},
    {'name':'Total Sales' , 'price':'$89k' , 'incre-decre':11 , 'time':'this week' , 'faIcon':<SlHandbag/> , 'bg-color':'#FFAFD8' , 'color':'#DE1B32'}
]

const Income=()=>{
    return (
        <div className="income-container flex justify-between">
            {
                data.map((object,index)=>{
                    return <div key={index} className='data-container box-shadow'>
                                <div  className='flex'>
                                    <div className='fa-icon pr-2'>
                                        <div className='icon-border' style={{backgroundColor : object?.['bg-color']}}>
                                            <div style={{color : object?.color}}>{object?.faIcon}</div>
                                        </div>
                                    </div>
                                    <div className='data font-bold pt-3'>
                                        <p className='heading'>{object?.name}</p> 
                                        <p className='price'>{object?.price}</p>
                                        <p className='icre text-xs'><span style={{color : object['incre-decre']>10 ? '#00A848' : '#D62F60'}}>{`${object['incre-decre']}%`} </span><span className='time'>{object?.time}</span></p>
                                    </div>
                                </div>
                        </div>
                })
            }
        </div>
    )
}

export default Income