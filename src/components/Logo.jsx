import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { SITE } from "../config/site";

// Logo file must be at: public/logo.png
export default function Logo() {
  const [err, setErr] = useState(false);
  return (
    <span className="flex items-center gap-3">
      {!err ? (
        <img
          src="/logo.png"
          alt=""
          onError={() => setErr(true)}
          className="h-11 w-11 rounded-md bg-white object-contain p-0.5"
        />
      ) : (
        <ShieldCheck className="text-brand" />
      )}
      <span className="font-display text-base font-extrabold leading-tight text-white sm:text-lg">
        {SITE.name}
      </span>
    </span>
  );
}