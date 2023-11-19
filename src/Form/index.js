
import { useState } from "react";
import { currencies } from "../currencies";
import Result from "./Result";
import { Clock } from "../Clock";
import { Button, Fieldset, LabelText, Legend, Field } from "./styled";


export const Form = ({ calcResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calcResult(currency, amount);
  };


  return (
    <form onSubmit={onSubmit}>
      <Fieldset>
        <Legend>Kalkulator walutowy</Legend>
        <Clock />
        <p>
          <label>
            <LabelText>Wpisz kwotę:</LabelText>
            <Field
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              required
              type="number"
              min="0"
              step="0.01"
              placeholder="PLN"
            />
          </label>
        </p>
        <p>
          <label>
            <LabelText>Wybierz walutę:</LabelText>{" "}
            <Field as="select" value={currency} onChange={({target}) => setCurrency(target.value)}>
              {currencies.map((currency => (
                <option 
                key={currency.short}
                value={currency.short}
                >
                  {currency.name}
                </option>
              )))}
            </Field>
          </label>
        </p>
        <Result result={result}/>
        <p>
          <Button>Przelicz</Button>
        </p>
      </Fieldset>
    </form>
  );
};
