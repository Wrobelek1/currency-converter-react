


const Label = ({title,labelBody}) => (
  <p>
    <label>
      <span className="form__labelText">{title}</span>{" "}
      {labelBody}
    </label>
  </p>
);

export default Label;
