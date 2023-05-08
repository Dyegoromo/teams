import "./btn-css.css";

const BtnCreate = (props) => {
  return (
    <button key={0} className="btn-create">
      {props.value}
    </button>
  );
};

export default BtnCreate;
