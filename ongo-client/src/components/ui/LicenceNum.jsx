import { Input } from "@/components/ui/input";

export function LicenceNum() {
  return (
    <Input
      type="number"
      placeholder="Licence no."
      className=" w-44 inline-block"
      min="0"
    />
  );
}
