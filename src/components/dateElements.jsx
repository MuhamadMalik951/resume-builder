import { Select, SelectItem } from "@nextui-org/react";
import { generateYearOptions } from "./dataFormatFunction";

function DateElement({ name, selectYear, setYear, selectMonth, setMonth }) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return (
      <div className="flex flex-col h-20  w-2/4  gap-3 justify-center items-center">
        <div className="h-full font-bold align-text-top w-full ">{name}</div>
        <div className="selectElement flex w-fit h-fit items-center justify-center gap-4">
          <div className="flex w-full md:flex-nowrap gap-4 flex-row justify-center">
            <Select
              className="flex w-28 h-fit  p-0"
              placeholder={selectMonth}
              value={selectMonth}
            >
              {months.map((month, index) => (
                <SelectItem
                  data={month}
                  placeholder={selectMonth}
                  onClick={(e) => {
                    setMonth(e.target.textContent);
                    // setMonth = e.target.textContent
                  }}
                  key={index}
                >
                  {month}
                </SelectItem>
              ))}
            </Select>
            <Select
              size="none"
              value={selectYear}
              placeholder={selectYear}
              onChange={(e) => {
                setYear(e.target.value);
              }}
              className="flex w-20 h-fit  p-0"
            >
              {generateYearOptions()}
            </Select>
          </div>
        </div>
      </div>
    );
  }

  export default DateElement