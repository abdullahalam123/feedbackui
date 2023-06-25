const Button = ({
  children,
  version,
  type,
  isDisabled = false,
}) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

export default Button;
