import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";
import { bookMinTime } from "utils/common";

export const DateTimePicker: React.FC<{
    date: Date;
    setDate: (date: Date) => void;
}> = ({ date, setDate }) => {

    return (
        <DatePicker
            selected={date}
            onChange={(dt) => {
                if (dt) setDate(dt)
            }}
            showTimeSelect
            minDate={subDays(new Date(), 0)}
            maxDate={addDays(new Date(), 30)}
            minTime={bookMinTime()}
            maxTime={setHours(setMinutes(new Date(), 50), 23)}
            timeIntervals={10}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="form-control"
            placeholderText="Click to select a date"
        />
    );
};