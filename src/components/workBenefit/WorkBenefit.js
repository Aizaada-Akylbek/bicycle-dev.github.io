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
            <h1 className='main-title-second' style={{textAlign:'center', margin:"3% 0"}}><span className='middle-blue'>{t("Benefits")}</span> <span className='dark-blue'>{t(" of cooperation with us")}</span></h1>
        

        <div className='savings-grid'>
        <div className='savings-item savings-card'>
      
        <h2 className='light-blue'>   <AccountBalanceWalletIcon sx={{ fontSize: 50 }}/> </h2>
                <span className='savings-title'>
                    <span className='savings-title-bold'>{t("Savings on")}</span><br/>
                    <span>{t("administrative and")}</span><br/>
                    <span>{t("operating ")}</span>
                    <span className='savings-title-bold'>{t("costs")}</span>
                </span>
        </div>
        <div className='savings-item savings-card'>
       
        <h2 className='light-blue'> <SupervisorAccountIcon sx={{ fontSize: 50 }}/></h2>
            <span className='savings-title'>
                    <span className='savings-title-bold'>{t("Outsourcing ")}</span>
                    <span>{t("of ")}</span>
                    <span className='savings-title-bold'>{t("accounting")}</span><br/>
                    <span>{t("and ")}</span>
                    <span className='savings-title-bold'>{t("HR functions, ")}</span>
                    <span>{t("including")}</span><br/>
                    <span className='savings-title-bold'>{t("Capacity Development")}</span>
                </span>
        </div>
        <div className='savings-item savings-card'>
        <h2 className='light-blue'><Diversity2Icon sx={{ fontSize: 50 }}/></h2>
            <span className='savings-title'>
                <span className='savings-title-bold'>{t("Internationalization")}</span><br/>
                <span>{t("of the team and")}</span><br/>
                <span>{t("your business")}</span>
            </span>
        </div>
        </div>
        <div className='savings-main-block savings-card'>
        <div className='savings-item medium'>
            <h2>
            <div className='savings-title'>{t("Savings on Salary")} <br/>35% {t("saved")}</div>
            </h2>
                <PieChart
                        series={[
                            {
                            data: [
                                { value: 3.5, color: '#2a91ff' }, // Use color property
                                {value:6.5, color:'rgb(234, 232, 232)'}
                            ],
                            },
                        ]}Ï
                        width={400}
                        height={200}
                        />            
        </div>
        <div className='savings-item medium'>
            <h2>
            <div className='savings-title'>{t("Savings on Employer Social Contributions")} <br/>20% {t("saved")}</div>

            <PieChart
                    series={[
                        {
                        data: [
                            { value: 2, color: '#2a91ff' }, // Use color property
                            {value:8, color:'rgb(234, 232, 232)'}
                        ],
                        },
                    ]}Ï
                    width={400}
                    height={200}
                    />
            </h2>
        </div>
        </div>
        </div>
       
    </div>
  )
}

export default WorkBenefit