import React from 'react'
import EnquiryPage from "../../components/enquirypage.js"
import GetInTouch from '../../components/GetInTouch.js'
import PopularDestination from '../../components/PopularDestination.js'
const page = () => {
  return (
     <>
      <EnquiryPage/>
      <div className="get-in-touch-mob-version">
        <GetInTouch/>
      </div>
      <div style={{margin: "10vh 0"}} className="enquiry-destination">
        <PopularDestination/>
      </div>
     </>
  )
}

export default page
