import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
  className='containers'
    speed={0}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#ebebeb"
    foregroundColor="#ecebeb"
  >
    <circle cx="574" cy="223" r="20" /> 
    <rect x="0" y="381" rx="9" ry="9" width="82" height="28" /> 
    <rect x="138" y="372" rx="25" ry="25" width="142" height="40" /> 
    <rect x="0" y="290" rx="7" ry="7" width="280" height="62" /> 
    <rect x="0" y="252" rx="7" ry="7" width="280" height="20" /> 
    <circle cx="135" cy="121" r="105" />
  </ContentLoader>
)

export default Skeleton