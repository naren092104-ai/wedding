import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  speedY: number;
  speedX: number;
  opacity: number;
  pulseSpeed: number;
  pulseVal: number;
  isSparkle?: boolean;
}

export const FloatingParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Warm royal gold, celestial champagne, amber, and ruby-rose glow colors
    const colors = [
      'rgba(245, 158, 11,',  // Rich Amber
      'rgba(251, 191, 36,',  // Bright Gold
      'rgba(253, 230, 138,', // Golden Champagne
      'rgba(244, 63, 94,',   // Soft Rose
      'rgba(255, 255, 255,', // Diamond white
    ];

    const particleCount = Math.min(50, Math.floor(window.innerWidth / 24));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: -(Math.random() * 0.4 + 0.12),
        speedX: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.6 + 0.25,
        pulseSpeed: Math.random() * 0.035 + 0.015,
        pulseVal: Math.random() * Math.PI * 2,
        isSparkle: i % 4 === 0,
      });
    }

    const drawStarGlint = (cx: number, cy: number, size: number, alpha: number) => {
      ctx.save();
      ctx.strokeStyle = `rgba(254, 240, 138, ${alpha})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      // 4-point golden star sparkle
      ctx.moveTo(cx - size, cy);
      ctx.lineTo(cx + size, cy);
      ctx.moveTo(cx, cy - size);
      ctx.lineTo(cx, cy + size);
      ctx.stroke();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;
        p.pulseVal += p.pulseSpeed;

        const currentOpacity = Math.max(0.08, Math.min(0.9, p.opacity + Math.sin(p.pulseVal) * 0.35));

        // Wrap around boundaries
        if (p.y < -15) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;

        // Draw soft glowing ambient halo
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3.5);
        gradient.addColorStop(0, `${p.color} ${currentOpacity})`);
        gradient.addColorStop(0.4, `${p.color} ${currentOpacity * 0.45})`);
        gradient.addColorStop(1, `${p.color} 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core bright center
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.95})`;
        ctx.fill();

        // 4-point sparkle for selected particles
        if (p.isSparkle && currentOpacity > 0.4) {
          drawStarGlint(p.x, p.y, p.radius * 2.8, (currentOpacity - 0.4) * 1.5);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-85"
      aria-hidden="true"
    />
  );
};
