import css from './Statistics.module.css'
const colors = ['blue', 'purple', 'red',]

function Statistics({ stats }) {
  return (
    <div className = {css.section}>
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.statList}>
        {stats.map((item, index) => (
          <li className={css.item} key={item.id} style={{backgroundColor: item.color}}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
    </div>
  );
}

export default Statistics;