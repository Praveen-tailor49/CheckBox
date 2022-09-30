import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const Authentication = ({cmp}) => {

  const navigate = useNavigate()
    const Cmp = cmp
    
    // useEffect(() => {
    //     (async () => {
    //       const token = await sessionStorage.getItem('token')
    //       if (!token) navigate('/login')
    //       })();
    //   }, [])

  return (
    <>
        <Cmp/>
    </>
  )
}

export default Authentication