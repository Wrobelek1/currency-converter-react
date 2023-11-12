import Legend from "./Legend";
import Select from "./Select";
import Button from "./Button";
import Result from "./Result";
import Label from "./Label";
import Input from "./Input";
import Form from "./Form";
import Container from "./Container";
import Fieldset from "./Fieldset";

function App() {
  return (
    <Container>
      <Form>
        <Fieldset>
          <Legend />
          <Label title="Wpisz kwotę:" labelBody={<Input />} />
          <p>
            <Label title="Wybierz walutę:" labelBody={<Select />} />
          </p>
          <Result />
          <Button />
        </Fieldset>
      </Form>
    </Container>
  );
}

export default App;
