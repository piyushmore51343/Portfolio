"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  speed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  dx: number;
  dy: number;
  length: number;
  speed: number;
  alpha: number;
  active: boolean;
}

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse position with easing parameters
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX - width / 2) * 0.05;
      mouseRef.current.targetY = (e.clientY - height / 2) * 0.05;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Initialize depth-aware stars
    const starCount = 250;
    const stars: Star[] = Array.from({ length: starCount }, () => {
      const depth = Math.random();
      return {
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * 1000 + 200,
        size: Math.random() * 1.5 + 0.5,
        color: depth > 0.8 ? "#22D3EE" : depth > 0.6 ? "#8B5CF6" : "#F8FAFC",
      };
    });

    // Initialize floating ambient particles
    const particleCount = 40;
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 0.02 + 0.005,
    }));

    // Setup a single pool shooting star system
    const shootingStar: ShootingStar = {
      x: 0,
      y: 0,
      dx: 0,
      dy: 0,
      length: 0,
      speed: 0,
      alpha: 0,
      active: false,
    };

    const triggerShootingStar = () => {
      if (shootingStar.active) return;
      shootingStar.x = Math.random() * width * 0.6;
      shootingStar.y = Math.random() * height * 0.4;
      shootingStar.speed = Math.random() * 15 + 10;
      shootingStar.dx = shootingStar.speed;
      shootingStar.dy = shootingStar.speed * (Math.random() * 0.4 + 0.3);
      shootingStar.length = Math.random() * 80 + 50;
      shootingStar.alpha = 1;
      shootingStar.active = true;
    };

    // Frame Loop
    const render = () => {
      // Smooth mouse easing (Lerp)
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Clear with base dark ambient overlay layer
      ctx.fillStyle = "#050816";
      ctx.fillRect(0, 0, width, height);

      // Layer 1: Dynamic Multi-Layer Nebula Background Glow
      const nebula1 = ctx.createRadialGradient(
        width * 0.3 - mouse.x * 0.5,
        height * 0.3 - mouse.y * 0.5,
        10,
        width * 0.3,
        height * 0.3,
        width * 0.7
      );
      nebula1.addColorStop(0, "rgba(139, 92, 246, 0.12)"); // Purple
      nebula1.addColorStop(0.5, "rgba(59, 130, 246, 0.04)"); // Blue
      nebula1.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, width, height);

      const nebula2 = ctx.createRadialGradient(
        width * 0.7 - mouse.x * 0.3,
        height * 0.7 - mouse.y * 0.3,
        50,
        width * 0.8,
        height * 0.6,
        width * 0.5
      );
      nebula2.addColorStop(0, "rgba(34, 211, 238, 0.08)"); // Cyan Accent
      nebula2.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, width, height);

      // Layer 2: Depth-Aware 3D Starfield with Mouse Parallax
      stars.forEach((star) => {
        // Simulating forward movement down Z axis
        star.z -= 0.15;
        if (star.z <= 0) {
          star.z = Math.random() * 1000 + 200;
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
        }

        // Projecting 3D points onto 2D screen space
        const k = 400 / star.z;
        const px = star.x * k + width / 2 - mouse.x * (400 / star.z);
        const py = star.y * k + height / 2 - mouse.y * (400 / star.z);

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const finalSize = star.size * k * 0.4;
          ctx.beginPath();
          ctx.arc(px, py, Math.max(0.1, finalSize), 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.fill();
        }
      });

      // Layer 3: Floating Ambient Kinetic Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Visual pulsing effect
        p.alpha += p.speed;
        if (p.alpha > 0.6 || p.alpha < 0.1) p.speed = -p.speed;

        ctx.beginPath();
        ctx.arc(p.x - mouse.x * 0.2, p.y - mouse.y * 0.2, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${Math.max(0, p.alpha)})`;
        ctx.fill();
      });

      // Layer 4: Running Streak Shooting Stars
      if (shootingStar.active) {
        shootingStar.x += shootingStar.dx;
        shootingStar.y += shootingStar.dy;
        shootingStar.alpha -= 0.02;

        if (shootingStar.alpha <= 0 || shootingStar.x > width || shootingStar.y > height) {
          shootingStar.active = false;
        } else {
          const grad = ctx.createLinearGradient(
            shootingStar.x,
            shootingStar.y,
            shootingStar.x - shootingStar.length,
            shootingStar.y - (shootingStar.length * shootingStar.dy) / shootingStar.dx
          );
          grad.addColorStop(0, `rgba(34, 211, 238, ${shootingStar.alpha})`);
          grad.addColorStop(1, "rgba(34, 211, 238, 0)");

          ctx.beginPath();
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.moveTo(shootingStar.x, shootingStar.y);
          ctx.lineTo(
            shootingStar.x - shootingStar.length,
            shootingStar.y - (shootingStar.length * shootingStar.dy) / shootingStar.dx
          );
          ctx.stroke();
        }
      }

      // Random generator check for shooting stars
      if (Math.random() < 0.003) {
        triggerShootingStar();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 block h-full w-full bg-[#050816] pointer-events-none"
    />
  );
}