import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarCompo() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        className="rounded-lg border"
      />
    </div>
  );
}
