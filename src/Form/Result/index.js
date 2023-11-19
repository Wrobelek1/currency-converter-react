import {StyledResult} from "./styled"

const Result = ({result}) => (
    <StyledResult>
    Kwota po przeliczeniu: <span>{result !== undefined && (
        <>
        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}       
        </>
    )}
    </span>
    </StyledResult>
);

export default Result;