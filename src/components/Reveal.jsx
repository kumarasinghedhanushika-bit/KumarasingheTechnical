    import { useEffect, useRef, useState } from "react";

    // Fades an element up when it scrolls into view.
    export default function Reveal({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || !("IntersectionObserver" in window)) { setShow(true); return; }
        const io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setShow(true); io.disconnect(); }
        }, { threshold: 0.15 });
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${show ? "show" : ""} ${className}`}>
        {children}
        </div>
    );
    }