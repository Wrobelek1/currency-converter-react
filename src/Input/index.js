import "../Select/style.css"

const Input = () => (
  <input
    className="form__field"
    required
    type="number"
    min="0"
    step="0.01"
    placeholder="PLN"
  />
);

export default Input;