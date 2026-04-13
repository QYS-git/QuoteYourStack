'use client';

// src/app/components/CustomCursor.tsx
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Don't render on touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onEnterLink = () => ringRef.current?.classList.add('scale-150');
    const onLeaveLink = () => ringRef.current?.classList.remove('scale-150');

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 9999,
          width: '6px', height: '6px',
          borderRadius: '50%',
          backgroundColor: '#C9A96E',
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 9998,
          width: '38px', height: '38px',
          border: '1.5px solid rgba(201,169,110,0.45)',
          borderRadius: '50%',
          pointerEvents: 'none',
          willChange: 'transform',
          transition: 'transform 0.15s ease, width 0.3s ease, height 0.3s ease',
        }}
      />
    </>
  );
}
