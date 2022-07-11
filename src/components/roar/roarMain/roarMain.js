import '../../../styles/roarStyle.scss'
import { RoarMainSing } from './components/mainSing'
import { RoarMainItem } from './components/mainItem'
export const RoarMain = () => {
  return (
    <div className='mian'>
      <div className="roar-main">
        <RoarMainSing />
        <RoarMainItem />
      </div>
    </div>

  )
}