import StatisticsLine from "./StatisticsLine";

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <h3>No feedback given</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>Total feedback: {props.total}</h3>
      <StatisticsLine text='GOOD' score={props.good}/>
      <StatisticsLine text='NEUTRAL' score={props.neutral}/>
      <StatisticsLine text='BAD' score={props.bad}/>
      <StatisticsLine text='Average' score={props.average}/>
    </div>
  );
};

export default Statistics;