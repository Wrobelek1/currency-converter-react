import { useState } from "react";
import  { Form } from "./Form";
import { currencies } from "./currencies";
import { Wrapper } from "./styled";

function App() {
  
  const [result, setResult] = useState();

  const calcResult = (currency, amount) => {
    const rate = currencies
    .find(({short}) => short === currency).rate;

    setResult({
      targetAmount: amount / rate,
      currency,
    })
  }
  return (
    <Wrapper>
      <Form result={result} calcResult={calcResult} />
    </Wrapper>
  );
}

export default App;
