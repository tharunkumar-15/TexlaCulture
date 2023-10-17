import React from 'react'
import SearchBar from './Search'
import ClientManagement from './ClientManagement'
import OnboardCompaines from './OnboardCompaines'
import RegionalMetrics from './Regionalmetrics'

function DashBoard() {
  return (
    <div style={{marginLeft:"255px"}}>
         <SearchBar/>
         <ClientManagement/>
         <div style={{display:"flex"}}>
            <OnboardCompaines/>
            <RegionalMetrics/>
         </div>
    </div>
  )
}

export default DashBoard