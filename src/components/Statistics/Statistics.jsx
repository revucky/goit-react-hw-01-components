import PropTypes from "prop-types";
import "./Statistics.css";
import colorSt from "../../services/color";

const Statistics = ({ stats }) => {
  // console.log(colorSt());

  // const { id, label, percentage } = stats;
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {stats.map((stat) => (
          <li
            key={stat.id}
            style={{ backgroundColor: colorSt() }}
            className="Stat-item"
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
