const defaultState = [
  {
    title: 'Starter',
    price: '$49',
    views: '20',
    experience: '4'
  },
  {
    title: 'Starter Plus',
    price: '$99',
    views: '1,000',
    experience: '4'
  },
  {
    title: 'Starter',
    price: '$149',
    views: '3,000',
    experience: '60'
  },
  {
    title: 'Pro',
    price: '$369',
    views: '8,000',
    experience: '100'
  },

]

export default function reducer(preState = defaultState, action) {
  return preState;

}

