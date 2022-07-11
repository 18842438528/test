import { Item } from './item'
import { useState } from 'react'
import store from '../../../../redux/store'

export const RoarMainItem = () => {

  const preData = store.getState();
  const [buy, setBuy] = useState(null)

  return (
    <div className="roar-main-item">
      {
        preData.map((value, index) => {
          return <Item
            title={value.title}
            price={value.price}
            views={value.views}
            experience={value.experience}
            key={'m' + index}
            index={index}
            buy={buy}
            onClick={setBuy} />
        })
      }

    </div>
  )
}