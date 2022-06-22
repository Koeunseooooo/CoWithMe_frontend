import { useState, useEffect } from "react";

export function useScroll() {
    const [scrollY, setScrollY] = useState(0);

    const listener = () => {
        setScrollY(window.pageYOffset);
    };

    useEffect(() => { // side effect 처리
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    });

    return {
        scrollY
    };
}