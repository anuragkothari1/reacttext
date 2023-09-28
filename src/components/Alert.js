import React from 'react'

const Alert = (props) => {
  return (
    
    props.msg !=="" &&
   <div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong></strong>{props.msg}
</div>

  )
}

export default Alert
