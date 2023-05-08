import "./worker-css.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Worker = (props) => {
  const { name, position, photo, id, fav } = props.data;
  const { mainColor, deleteWorker, like } = props;
  return (
    <div className="worker">
      <AiFillCloseCircle
        onClick={() => deleteWorker(id)}
        className="delete-worker"
      />
      <div className="worker-header" style={{ backgroundColor: mainColor }}>
        <img src={photo} alt={name} />
      </div>
      <div className="worker-info">
        <h4>{name}</h4>
        <h5>{position}</h5>
        {fav ? (
          <AiFillHeart
            color="red"
            onClick={() => like(id)}
            cursor={"pointer"}
          />
        ) : (
          <AiOutlineHeart
            color="gray"
            onClick={() => like(id)}
            cursor={"pointer"}
          />
        )}
      </div>
    </div>
  );
};

export default Worker;
