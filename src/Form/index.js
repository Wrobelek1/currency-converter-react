
import { useState } from "react";
import Result from "./Result";
import { Clock } from "../Clock";
import { Button, Fieldset, LabelText, Legend, Field, Loading, Failure } from "./styled";
import { useRatesData } from "./useRatesData";

export const Form = () => {
  const [result, setResult] = useState();
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  
  const ratesData = useRatesData();
  
  const currenciesDate = new Date(ratesData.apiDate);

  const calcResult = () => {
    const rate = ratesData.currencies[currency];
   
    setResult({
      targetAmount: amount * rate,
      currency,
      rate,
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    calcResult();
  }


  return (
    <form onSubmit={onSubmit}>
      <Fieldset>
        <Legend>Kalkulator walutowy</Legend>
        {ratesData.state === "loading" 
          ? (
        <Loading>
          Sekundka... <br /> Ładuję kursy walut
        </Loading>
        )
        : (
          ratesData.state === "error" ? (
          <Failure>
            Coś poszło nie tak :C  Sprawdź połączenie lub spróbuj ponownie później.
          </Failure>
        ) : (
        <>
            <Clock />
        <p>
          <label>
            <LabelText>Wpisz kwotę:</LabelText>
            <Field
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              required
              name="amount"
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
            <Field as="select" name="currency" value={currency} onChange={({target}) => setCurrency(target.value)}>
              {Object.keys(ratesData.currencies).map((currency) => (
              <option 
                key={currency}
                value={currency}
                >
                  {currency}
              </option>
            ))}
            </Field>
          </label>
        </p>
        <Result result={result} currenciesDate={currenciesDate}/>
        <p>
          <Button>Przelicz</Button>
        </p>
        </>
        )
      )}
    </Fieldset>
  </form>
  );
};
