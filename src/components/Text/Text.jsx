import React from 'react'

const Text = ({colored2, words}) => {
  return (
    <div style={{marginBottom:"2rem"}}>
        <p style={{lineHeight:"1.8"}}><span style={{color:"#ff26b9"}}>{colored2} :</span>  {words}</p>
    </div>
  )
}

export default Text