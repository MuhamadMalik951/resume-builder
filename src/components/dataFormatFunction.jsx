import { SelectItem } from "@nextui-org/react";

export function extractYear(year) {
  return String(year).slice(-2);
}
export default function monthToNumber(monthName) {
  const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];

  const lowercaseMonth = monthName.toLowerCase();
  const monthIndex = months.indexOf(lowercaseMonth);
  const monthNumber = String(monthIndex + 1).padStart(2, '0');

  return monthNumber;
}
export function generateYearOptions() {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = currentYear; year >= 1990; year--) {
      years.push(year);
    }
    return years.map((year) => (
      <SelectItem className=" w-fit" key={year} value={year}>
        {year}
      </SelectItem>
    ));
  }