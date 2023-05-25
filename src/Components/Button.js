const Button = (props) => {
  const { label, onClick, ...rest } = props;
  return (
    <button className="expense-item_price" onClick={onClick} {...rest}>
      {label}
    </button>
  );
};

export default Button;
