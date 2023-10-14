import {Chart as ChartJS,BarElement,CategoryScale,LinearScale,Tooltip,Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2'

ChartJS.register(
    BarElement,CategoryScale,LinearScale,Tooltip,Legend
)

const OverView=()=>{
    const data = {
        labels : ['Jan' , 'Feb' , 'Mar' , 'Apr' , 'May','Jun' , 'Jul' , 'Aug' , 'Sep' , 'Oct', 'Nov' , 'Dec'],
        datasets:[
            {
                label :'',
                data : [4,3,5,7,6,4,8,6,6,5,4,5],
                backgroundColor : ['#F2EFFF','#F2EFFF','#F2EFFF','#F2EFFF','#F2EFFF','#F2EFFF','#5A32EA','#F2EFFF','#F2EFFF','#F2EFFF','#F2EFFF','#F2EFFF'],
                borderColor : 'transparent', 
                borderWidth : 1,
                borderRadius : 6
            }
        ],
    }

    const options = {
        scales: {
            x: {
                grid: {
                    display:false,
                    borderColor : '#fff'
                }   
            },
            y: {
                grid: {
                    display:false,
                } , 
                ticks:{
                    display:false
                },
            }
        }
    }

    return (
        <div className="overview-container bg-white rounded-md p-5 box-shadow">
            <div className="inner-container">
                <div className="upper flex justify-between">
                    <h3>Overview</h3>
                    <div>
                        <select className='border-none'>
                        <option value="Quarterly">Quarterly</option>
                        </select>
                    </div>
                </div>
                <p>Monthly Earning</p>
                <div>
                    <Bar
                        data={data}
                        options={options}
                    >
                    </Bar>
                </div>
            </div>
        </div>
    )
}

export default OverView