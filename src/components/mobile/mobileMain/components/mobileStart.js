import '../../../../styles/roarStyle.scss'
import store from '../../../../redux/store'
import { useState } from 'react'
import { MobileInfo } from './mobileInfo'
export const MobileStart = ({ title, price, views, experience }) => {
  const [isShow, setIsShow] = useState(false)
  return (
    <div className="mobile-main-start">
      <div className="mobile-main-starter">
        <div className="mobile-main-span">
          <span>
            {title}
          </span>
        </div>
        <div>
          <span className="mobile-main-price">
            {price}
          </span>
          <span className="mobile-main-month">
            /month
          </span>
        </div>
      </div>
      <div className="mobile-main-views">
        <div className='mobile-main-view'>
          <div>
            <span>
              VIews/month
            </span>
          </div>
          <div>
            <span className='mobile-main-exper'>
              {views}
            </span>
          </div>
        </div>
        <div className='mobile-main-viewo'>
          <div>
            <span>
              AR experiences
            </span>
          </div>
          <div>
            <span className='mobile-main-exper'>
              {experience}
            </span>
          </div>
        </div>
      </div>
      <div className='mobile-start-footer'>
        <div className='mobile-start-plan' onClick={() => { setIsShow(!isShow) }}>
          Plan info
        </div>
        {
          isShow &&
          <MobileInfo />
        }
        <div className='mobile-start-now'>
          Buy now
        </div>
      </div>
    </div>
  )
}