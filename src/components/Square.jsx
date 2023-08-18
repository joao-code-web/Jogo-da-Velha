const Square = ({ value, onClick }) => {
  return (
    <button className="bord" onClick={onClick}>
      <h1>{value}</h1>
    </button>
  );
};

export default Square;
