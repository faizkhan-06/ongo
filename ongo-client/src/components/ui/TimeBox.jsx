import { Input } from "../ui/input";

export function TimeBox() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  return (
    <Input
      type="text"
      name="time-box"
      value={`${hours}:${minutes.toString().padStart(2, "0")}`}
      className=" w-44 inline-block"
      readOnly
    />
  );
}
