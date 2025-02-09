import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
// import PieAnimation from '../PieChart/PieAnimation';
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';


const WorkBenefit = () => {
  return (
    <div className='container'>
        
        <div>
        <PieChart
            colors={['#2a91ff', 'blue', 'green']} // Use palette
            series={[
                {
                data: [
                    { value: 3.5, color: '#2a91ff' }, // Use color property
                    {value:6.5, color:'blue'}
                ],
                },
            ]}Ï
            width={400}
            height={200}
            />
            <h2>До 35% экономия на общей зарплате сотрудника</h2>
            {/* <PieAnimation/> */}
        </div>
        <div>
        <PieChart
            colors={['#2a91ff', 'blue', 'green']} // Use palette
            series={[
                {
                data: [
                    { value: 2, color: '#2a91ff' }, // Use color property
                    {value:8, color:'blue'}
                ],
                },
            ]}Ï
            width={400}
            height={200}
            />
            <h2>Около 20% экономия на Sozialabgaben Arbeitgeber</h2>
        </div>
        <div>

            <h2>Экономия на административных и операционных расходах</h2>
        </div>
       
    </div>
  )
}

export default WorkBenefit