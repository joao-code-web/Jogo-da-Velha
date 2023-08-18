const Button = ({ name, id, text, onClick }) => {
  return (
    <>
      <button name={name} id={id} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
