import Income from '../Income';
import {PiHandWavingDuotone} from 'react-icons/pi'
import OverView from '../OverView';
import './DashBoard.scss'
import Customers from '../Customers';
import Product from '../Product';

const DashBoard=()=>{
    return (
        <div className="dash-container">
            <div className="inner">
                <div className="upper-container mb-10 flex justify-between">
                    <h3>Hello Shahrukh <PiHandWavingDuotone color='#DFB791'/></h3>
                    <div><input className=' border-none p-1 pl-3 rounded text-gray-600' placeholder='Search'></input></div>
                </div>
                <div className="income-container">
                    {Income()}
                </div>
                <div className='middle-container mt-9 flex justify-between'>
                    <div className='overview-cont'>
                        {OverView()}
                    </div>
                    <div className='customer-cont'>
                        {Customers()}
                    </div>
                </div>
                <div className='product-container'>
                    {Product()}
                </div>
            </div>
        </div>
    )
}

export default DashBoard