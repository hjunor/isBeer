import "./styles.css";
export const Input = ({ label, type, setValue, value, Icon }) => {
  return (
    <div className="wrapper">
      <input type={type} onChange={({ target }) => setValue(target.value)} />
      <div className={!!value ? "isValue" : "label"}> {label}</div>
      {Icon && <Icon className="icon" size={32} />}
    </div>
  );
};
