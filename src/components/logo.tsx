import Image from "next/image";

export function Logo() {
  return (
    <div className="h-12 w-12 relative">
      <Image fill alt="Logo" src={"/logo.png"} />
    </div>
  );
}
