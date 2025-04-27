// import React from 'react'
// import { PieChart } from '@mui/x-charts/PieChart';
// // import PieAnimation from '../PieChart/PieAnimation';
// // import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import Diversity2Icon from '@mui/icons-material/Diversity2';
// import './WorkingBenefit.css'
// import { useTranslation } from 'react-i18next';


// const WorkBenefit = () => {
//       const { t } = useTranslation();
    
//   return (
//     <div className='container'>
//         <div className=''>
//             <h1 className='main-title-second' style={{textAlign:'center', margin:"3% 0"}}><span className='middle-blue'>{t("Benefits")}</span> <span className='dark-blue'>{t(" of cooperation with us")}</span></h1>
        

//         <div className='savings-grid'>
//         <div className='savings-item savings-card'>
      
//         <h2 className='light-blue'>   <AccountBalanceWalletIcon sx={{ fontSize: 50 }}/> </h2>
//                 <span className='savings-title'>
//                     <span className='savings-title-bold'>{t("Savings on")}</span><br/>
//                     <span>{t("administrative and")}</span><br/>
//                     <span>{t("operating ")}</span>
//                     <span className='savings-title-bold'>{t("costs")}</span>
//                 </span>
//         </div>
//         <div className='savings-item savings-card'>
       
//         <h2 className='light-blue'> <SupervisorAccountIcon sx={{ fontSize: 50 }}/></h2>
//             <span className='savings-title'>
//                     <span className='savings-title-bold'>{t("Outsourcing ")}</span>
//                     <span>{t("of ")}</span>
//                     <span className='savings-title-bold'>{t("accounting")}</span><br/>
//                     <span>{t("and ")}</span>
//                     <span className='savings-title-bold'>{t("HR functions, ")}</span>
//                     <span>{t("including")}</span><br/>
//                     <span className='savings-title-bold'>{t("Capacity Development")}</span>
//                 </span>
//         </div>
//         <div className='savings-item savings-card'>
//         <h2 className='light-blue'><Diversity2Icon sx={{ fontSize: 50 }}/></h2>
//             <span className='savings-title'>
//                 <span className='savings-title-bold'>{t("Internationalization")}</span><br/>
//                 <span>{t("of the team and")}</span><br/>
//                 <span>{t("your business")}</span>
//             </span>
//         </div>
//         </div>
//         <div className='savings-main-block'>


     
//         <div className='savings-card-long'>
//         <div className='savings-item-long medium'>
//             <h2>
//             <div className='savings-title'>{t("Savings on Salary")}</div>
//             </h2>
//                 <PieChart
//                         series={[
//                             {
//                             data: [
//                                 { value: 3.5, color: '#2a91ff' }, // Use color property
//                                 {value:6.5, color:'rgb(234, 232, 232)'}
//                             ],
//                             },
//                         ]}Ï
//                         width={400}
//                         height={200}
//                         />   
//                 <h2>35% {t("saved")}</h2>         
//         </div>
//         <div className='savings-item-long medium'>
//             <h2>
//             <div className='savings-title'>{t("Savings on Employer Social Contributions")}</div>
//             </h2>
//             <PieChart
//                     series={[
//                         {
//                         data: [
//                             { value: 2, color: '#2a91ff' }, // Use color property
//                             {value:8, color:'rgb(234, 232, 232)'}
//                         ],
//                         },
//                     ]}Ï
//                     width={400}
//                     height={200}
//                     />
            
//             <h2>20% {t("saved")}</h2>
//         </div>
//         </div>
//         </div>
//         </div>
       
//     </div>
//   )
// }

// export default WorkBenefit

import React, { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import './WorkingBenefit.css';
import { useTranslation } from 'react-i18next';
import CustomPieChart from '../customPieChart/CustomPieChart';

const WorkBenefit = () => {
  const { t } = useTranslation();
  const [chartWidth, setChartWidth] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = Math.min(window.innerWidth * 0.8, 400);
      setChartWidth(containerWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='container'>
      <h1 className='main-title-second' style={{ textAlign: 'center', margin: "3% 0" }}>
        <span className='middle-blue'>{t("Benefits")}</span>
        <span className='dark-blue'>{t(" of cooperation with us")}</span>
      </h1>

      <div className='savings-grid'>
        {[
          {
            icon: <AccountBalanceWalletIcon sx={{ fontSize: 50 }} />,
            title: `${t("Savings on")} ${t("administrative and operating costs")}`,
          },
          {
            icon: <SupervisorAccountIcon sx={{ fontSize: 50 }} />,
            title: `${t("Outsourcing of accounting and HR functions, including Capacity Development")}`,
          },
          {
            icon: <Diversity2Icon sx={{ fontSize: 50 }} />,
            title: `${t("Internationalization of the team and your business")}`,
          },
        ].map((item, index) => (
          <div key={index} className='savings-item savings-card'>
            <h2 className='light-blue'>{item.icon}</h2>
            <span className='savings-title'>{item.title}</span>
          </div>
        ))}
      </div>

      {/* <div className='savings-grid-2'>
        {[
          { value: 3.5, total: 10, label: "35%" },
          { value: 2, total: 10, label: "20%" },
        ].map((data, index) => (
          <div key={index} className='savings-item savings-card'>
              <div className='savings-title'>{index === 0 ? t("Savings on Salary") : t("Savings on Employer Social Contributions")}</div>
              <h2>
            <PieChart
              series={[
                {
                  data: [
                    { value: data.value, color: '#2a91ff' },
                    { value: data.total - data.value, color: 'rgb(234, 232, 232)' },
                  ],
                },
              ]}
              width={chartWidth}
              height={chartWidth / 2}
              
            />
            </h2>
            <h2>{data.label} {t("saved")}</h2>
          </div>
        ))}
      </div> */}
      <div className='savings-grid-2'>
  {[
    { value: 3.5, total: 10, label: "35%" },
    { value: 2, total: 10, label: "20%" },
  ].map((data, index) => (
    <div key={index} className='savings-item savings-card'>
      <div className='savings-title'>
        {index === 0 ? "Savings on Salary" : "Savings on Employer Social Contributions"}
      </div>
      <div className="piechart-wrapper">
        <CustomPieChart value={data.value} total={data.total} size={120} />
      </div>
      <h2>{data.label} saved</h2>
    </div>
  ))}
</div>
      </div>
  );
};

export default WorkBenefit;
