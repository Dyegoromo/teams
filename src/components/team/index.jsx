import "./team-css.css";
import Worker from "../worker";
import hexToRgba from "hex-to-rgba";

const Team = (props) => {
  //Destructured. I want you to take mainColor, etc. from props.data:

  const { mainColor, secondColor, title, id } = props.data;
  const { workers, deleteWorker, updateColor, like } = props;
  const obj = {
    backgroundColor: hexToRgba(mainColor, 0.5),
  };

  return (
    <>
      {workers.length > 0 && (
        <section className="team" style={obj}>
          <input
            type="color"
            className="color-picker"
            value={mainColor}
            onChange={(e) => {
              updateColor(e.target.value, id);
            }}
          />
          <h3 style={{ borderColor: mainColor }}>{title}</h3>
          <div className="worker-container">
            {workers.map((worker, index) => (
              <Worker
                data={worker}
                key={index}
                mainColor={mainColor}
                deleteWorker={deleteWorker}
                like={like}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Team;
