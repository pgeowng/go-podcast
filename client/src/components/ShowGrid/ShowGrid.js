import './ShowGrid.css'
export const ShowGrid = ({ shows, onShow }) => {
  return (
    <div className="shows">
      <div className="shows__container">
        {shows.map((show) => {
          return (
            <a href="" className="show-card" onClick={onShow}>
              <div className="show-card__container">
                <img
                  className="show-card__img"
                  src={show.image}
                  alt={show.title}
                  style={{ backgroundColor: show.color }}
                />
                <h3 className="show-card__title">{show.title}</h3>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
