import React from 'react'
import bgImage from '../../assets/mainBgs/Image.png'
import Kamasys from '../../assets/partners/kamasys_logo.jpg'
import GmbH from '../../assets/partners/mk_logic_rgb_338_white.png'
import Osma from '../../assets/partners/logo.a80f457e.svg'
import HTP from '../../assets/partners/Copy of htpkr_logo PNG.png'
import Grand from "../../assets/partners/logo_grand.png"

import './PartnersCards.css'
import { useTranslation } from 'react-i18next'

const PartnersCards = () => {
  const {t}=useTranslation()
    const cardData=[
        {title:'Kamasys GmbH', bg:Kamasys, info:t('Kamasys is a German market-leading software company in the field of communal catering, operating since 2003. Within 20 years of market experience, kamasys has built up a broad portfolio of innovative products in cash register, payment systems and digital labeling in food industry.' ), link:'https://www.kamasys.de/en/', width:48, linkTitle:'Kamasys GmbH | Home'},
        {title:'MK Logic GmbH', bg:GmbH, info:t("MK Logic represents a German IT firm specializing in software development and product certification. For extended period of market operations, the company has accumulated substantial expertise in product certification and Z-WAVE technologies.") , link:'https://www.mk-logic.de/', width:48, linkTitle:'MK Logic GmbH | Home'},
        {title:'OSMA Group', bg:Osma, info:t("Osma is a construction company with extensive experience in construction and renovation projects of various complexities. Holding a license for the construction of 9-story residential buildings in the Kyrgyz Republic and technical prowess in various finishing, roofing, and electrical installation works, Osma brings to life the creative and bold desires of its clients."), link:'https://osmagroup.org/#/', width:48, linkTitle:'OSMA Group | Home'},
        {title:'The High Technologies Park of the Kyrgyz Republic ', link:'http://htp.kg/', bg:HTP, info:t("The High Technologies Park of the Kyrgyz Republic (HTP KR) is a platform for the advancement of information and communication technologies (ICT), innovative knowledge-intensive industries, and computer and digital solutions in the Kyrgyz Republic (KR) which stimulates an export-oriented economy with its special tax regime for legal entities and individual entrepreneurs engaged in ICT activities in accordance with Article 4 of the Law of KR 'On High Technologies Park of the Kyrgyz Republic' dated July 8, 2011, #84."), width:48, linkTitle:'HTP | Home', link:'http://htp.kg/'},
        {title:'Grand Systems ', link:'', bg:Grand, info:t("Grand Systems is a rapidly growing IT company based in Bishkek, specializing in high-quality IT services. Its team of experts develops cutting-edge solutions, including secure document management and electronic digital signatures (EDS). The company is actively expanding its operations and attracting talented professionals to implement advanced projects."), width:100, linkTitle:'Grand Systems | Home', link:'http://htp.kg/'}
    ]
  return (
    <div className="partners-cards">
      <div className='bg-long bg-partners'/>
        {cardData.map(el=>(
            <div className="partners-card dark-blue" style={{width:`${el.width}%`}}>
              <img src={el.bg} alt={el.title} />
              <h4>{t(el.title)}</h4>
              <p>{el.info}</p>
              <a  className='light-blue' style={{ textDecoration: 'underline' }} href={el.link}>{el.linkTitle}</a>
          </div>
        ))}
      </div>
  )
}

export default PartnersCards