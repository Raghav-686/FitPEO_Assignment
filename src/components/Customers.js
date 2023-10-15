import {Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'
ChartJS.register(ArcElement,Tooltip,Legend)
const Customers=()=>{

    const data ={
        datasets:[
            {
                data : [4,3,5],
                backgroundColor : ['#F1EFFC','#F53396','#7146EA'],
                borderColor : ['#F1EFFC','#F53396','#7146EA'], 
            }
        ],
    }

    return (
        <div className="customer-container bg-white box-shadow rounded-md p-6">
            <div className="inner">
                <h3>Customers</h3>
                <p className='mb-3 head'>Customers that buy Products</p>
                <div className='donut-chart pl-4 relative'>
                    <p className='absolute dougnut-text'>
                        <p className='font-bold text-center text-3xl'>65%</p>
                        <p>Total New</p>
                        <p>Customers</p>
                    </p>
                    <Doughnut className='doughnut' data={data}>
                    </Doughnut>
                </div>
            </div>
        </div>
    )
}

export default Customers