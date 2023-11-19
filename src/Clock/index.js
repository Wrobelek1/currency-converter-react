import { StyledClock } from "./styled";    
import { useCurrentDate } from "./useCurrentDate";

const dateFormat = (date) => (
    date.toLocaleString(undefined, {
    weekday: "long",
    hour: '2-digit',
    minute: "2-digit",
    second:"2-digit",
    day: "2-digit",
    month :"long"
}));

export const Clock = () => {
    const date = useCurrentDate();

        return (
            <StyledClock>
                Dzisiaj jest {" "}
                {dateFormat(date)}
            </StyledClock>
        )
    };