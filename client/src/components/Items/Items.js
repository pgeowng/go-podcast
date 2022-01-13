import './Items.css'
export const Items = ({ items }) => (
  <div className="items">
    <ul className="items__list">
      {items.map((item) => {
        return (
          <li className="item">
            <span className="item__date">{item.date}</span>
            <span className="item__duration">{item.duration}</span>
            <span className="item__buttons">
              <button className="item__play" type="button">
                pl
              </button>
              <button className="item__play" type="button">
                pl
              </button>
            </span>
            <span className="item__title">{item.title}</span>
            <span className="item__performers">
              {item.performers.map((performer, idx) => (
                <a className="item__performer" href="#">
                  {performer}
                </a>
              ))}
            </span>
          </li>
        )
      })}
    </ul>
  </div>
)
