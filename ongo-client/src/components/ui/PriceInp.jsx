import { Input } from "@/components/ui/input";

export function PriceInp() {
  return (
    <Input
      type="number"
      placeholder="price per person"
      className=" w-44 inline-block"
      min="20"
      max="10000"
    />
  );
}
