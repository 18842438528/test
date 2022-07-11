import Broad from '../../../assets/broad.png'
import { MobileStart } from './components/mobileStart'
import { MobileInfo } from './components/mobileInfo'
import store from '../../../redux/store'
import { useState } from 'react'
export const MobileMain = () => {
  const preData = store.getState()

  return (
    <div className='mobile-main'>
      <div className='mobile-main-img'>
        <img src={Broad} alt='' />
      </div>
      {
        preData.map((value, index) => {
          return <MobileStart
            title={value.title}
            price={value.price}
            views={value.views}
            experience={value.experience} />
        })
      }
    </div>
  )
}