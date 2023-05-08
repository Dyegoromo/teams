import "./options-css.css";

const OptionsList = (props) => {
  const handleChange = (e) => {
    /*    console.log("change", e.target.value); */
    props.updateTeam(e.target.value);
  };

  return (
    <div className="options-list">
      <label>Team</label>
      <select value={props.valor} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>
          Select a team
        </option>
        {props.teams.map((team, index) => (
          <option key={index} value={team}>
            {team}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionsList;
