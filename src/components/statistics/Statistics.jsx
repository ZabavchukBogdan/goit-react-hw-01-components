import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from './randomHex';

export const Statistics = ({ title = 'UPLOAD STATS', stats }) => {
  return (
    <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
      <ul className={css.stat_list}>
        {stats.map(item => (
          <li style={{ backgroundColor: getRandomHexColor() }} key={item.id}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};