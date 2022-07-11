import '../../../styles/mobileStyle.scss'
import Shape from '../../../assets/shape.png'
import Jian from '../../../assets/jian.png'
import Photo from '../../../assets/photo.png'
export const MobileHeader = () => {
  return (
    <div className="mobile-header">
      <div className='mobile-header-img'>
        <img src={Shape} alt='' />
      </div>
      <div className='mobile-header-left'> </div>
      <div className='mobile-header-menu'>
        MENU
      </div>
      <div className='mobile-header-image'>
        <img src={Jian} alt='' />
      </div>
      <div className='mobile-header-right'> </div>
      <div className='mobile-header-photo'>
        <img src={Photo} alt='' />
      </div>
    </div>
  )
}