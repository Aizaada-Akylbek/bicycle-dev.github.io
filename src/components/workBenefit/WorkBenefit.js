import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
// import PieAnimation from '../PieChart/PieAnimation';
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import './WorkingBenefit.css'
import { useTranslation } from 'react-i18next';


const WorkBenefit = () => {
      const { t } = useTranslation();
    
  return (
    <div className='container'>
        <div className=''>
            <h1 className='main-title-second middle-blue' style={{textAlign:'center', margin:"3% 0"}}>{t("Benefits of cooperation with us")}</h1>
        
        <div className='savings-main-block'>
        <div className='savings-item medium'>
     <h2>
     <PieChart
            colors={['#2a91ff', 'blue', 'green']} // Use palette
            series={[
                {
                data: [
                    { value: 3.5, color: '#0c5ae9' }, // Use color property
                    {value:6.5, color:'rgb(234, 232, 232)'}
                ],
                },
            ]}Ï
            width={400}
            height={200}
            />
     </h2>
            <h2>{t("Up to 35% savings on the employee's total salary")}</h2>
            {/* <PieAnimation/> */}
        </div>
        <div className='savings-item medium'>
     <h2>
     <PieChart
            colors={['#2a91ff', 'blue', 'green']} // Use palette
            series={[
                {
                data: [
                    { value: 2, color: '#0c5ae9' }, // Use color property
                    {value:8, color:'rgb(234, 232, 232)'}
                ],
                },
            ]}Ï
            width={400}
            height={200}
            />
     </h2>
            <h2>{t("About 20% savings on Sozialabgaben Arbeitgeber")}</h2>
        </div>
        </div>
        <div className='savings-grid'>
        <div className='savings-item'>
      
        <h2 className='middle-blue'>   <SupervisorAccountIcon sx={{ fontSize: 50 }}/></h2>

            <h2>{t("Savings on administrative and operating costs")}</h2>
        </div>
        <div className='savings-item'>
       
        <h2 className='middle-blue'> <AccountBalanceWalletIcon sx={{ fontSize: 50 }}/></h2>
            <h2>{t("Outsourcing of accounting and HR functions, including Capacity Development")}</h2>
        </div>
        <div className='savings-item'>
        <h2 className='middle-blue'><Diversity2Icon sx={{ fontSize: 50 }}/></h2>
            <h2>{t("Internationalization of the team and your business")}</h2>
        </div>
        </div>
        </div>
       
    </div>
  )
}

export default WorkBenefit