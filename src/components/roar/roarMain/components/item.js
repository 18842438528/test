export const Item = ({ title, price, views, experience, onClick, index, buy }) => {

  return (
    <div className="roar-main-item-among">
      <div className={'roar-main-item-start'} style={buy === index ? { backgroundColor: '#6FCF97', color: '#fff' } : {}}>
        <div className="roar-main-item-model">
          {title}
        </div>
        <div className="roar-main-item-span">
          <span className="roar-main-item-h" style={buy === index ? { color: '#fff' } : {}}>
            {price}
          </span>
          <span>
            /month
          </span>
        </div>
      </div>
      <div className="roar-main-item-price">
        <div className="roar-main-item-views">
          <div>
            <span>
              VIews/month
            </span>
          </div>
          <div>
            <span className="rise">
              {views}
            </span>
          </div>
        </div>
        <div className="roar-main-item-ar">
          <span>
            AR experiences
          </span>
          <span className="rise">
            {experience}
          </span>
        </div>
      </div>
      <div className={buy === index ? 'roar-main-item-check-change' : "roar-main-item-check"} >
        <ul >
          <li> Augmented reality editor</li>
          <li > Content management system</li>
          <li> Hosting/storage of your ar experiences</li>
          <li>AR projects Dashboard</li>
          <li>Product maintenance and access to releases</li>
          <li>Customer support</li>
        </ul>
      </div>
      <div className="roar-main-item-btn" style={buy === index ? { background: 'rgba(111, 207, 151, 0.2)', color: '#27AE60', border: 'none' } : {}} onClick={() => onClick(index)}>
        {buy === index ? 'Your current plan' : 'Buy now'}
      </div>
    </div>
  )
}