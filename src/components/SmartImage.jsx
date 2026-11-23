import { useState } from "react";
export default function SmartImage({ src, alt, className = "", Icon }) {
  const [err, setErr] = useState(false);
  if (err || !src)
    return <div role="img" aria-label={alt} className={`flex items-center justify-center bg-navy-800 text-white/60 ${className}`}>{Icon && <Icon size={44} />}</div>;
  return <img src={src} alt={alt} loading="lazy" onError={() => setErr(true)} className={`object-cover ${className}`} />;
}
