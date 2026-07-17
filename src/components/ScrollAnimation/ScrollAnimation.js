"use client";

import { gsap } from "@/lib/gsap";

export function splineAnimation(element) {
    if (!element) return;

    gsap.set(element, {
        scale: 1,
        x: 0,
        y: 0,
    });

    gsap.to(element, {
        scale: 0.3,
        x: "45vw",
        y: "35vh",
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: document.body,
            start: "10px top",
            toggleActions: "play none none reverse",
        },
    });
}

