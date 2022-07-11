import '../../../styles/roarStyle.scss'
import Group from '../../../assets/group.png'
import Menu from '../../../assets/menu.png'
import Fill from '../../../assets/fill.png'
import Path from '../../../assets/path.png'
export const RoarHeader = () => {
  return (
    <div className="roar-header">
      <div className='roar-header-left'>
        <img src={Group} alt='' />
      </div>
      <div className='roar-header-ul'>
        <ul style={{ display: 'flex' }}>
          <li>Campaigns</li>
          <li>Roars</li>
          <li>Statistic</li>
          <li>Teams</li>
        </ul>
      </div>
      <div className='roar-header-menu'>
        <img src={Menu} alt='' />
      </div>
      <div className='roar-header-ul'>
        <ul style={{ display: 'flex' }}>
          <li>Plans</li>
          <li style={{ width: '100px' }}>Mobile App</li>
        </ul>
      </div>
      <div className='roar-header-create'>
        Create ROAR
      </div>
      <div className='roar-header-menu-img'>
        <img src={Menu} alt='' />
      </div>
      <div className='roar-header-john'>
        <img src={Fill} alt='' />
        <div className='roar-header-dou'>
          John Dou
        </div>
        <div className='roar-header-path'>
          <img src={Path} alt='' />
        </div>
      </div>
    </div>
  )
}