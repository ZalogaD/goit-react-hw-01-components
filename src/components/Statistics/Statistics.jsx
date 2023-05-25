import PropTypes from 'prop-types';
import {
  SectionStat,
  StatTitle,
  StatList,
  StatListItem,
  StatLabel,
  StatPercent,
} from './Statistics.styled';

export const Statistics = props => {
  const { title, stats} = props;
  
  return (
    <SectionStat>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({id, label, percentage}) => {
          return (
            <StatListItem key = {id}>
              <StatLabel>{label}</StatLabel>
              <StatPercent>{percentage}%</StatPercent>
            </StatListItem>
          );
        })}
      </StatList>
    </SectionStat>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};

Statistics.propTypes = {
  stat: PropTypes.arrayOf(
      PropTypes.exact({
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
      }))
}
export default Statistics;