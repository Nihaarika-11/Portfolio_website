import React, { useEffect, useRef, useState } from 'react';

interface Node3D {
  x: number;
  y: number;
  z: number;
  layer: number;
  baseRadius: number;
  pulsePhase: number;
  color: string;
}

interface Particle {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export const HeroAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [telemetryState, setTelemetryState] = useState({
    confidence: 94.8,
    sampleRate: '100 Hz',
    epoch: 128,
    bboxCoords: { x: 140, y: 110, w: 90, h: 70 },
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotationAngle = 0;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Handle high DPI resize
    const handleResize = () => {
      const container = containerRef.current;
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Build 3D multi-layered neural network nodes
    // Layer 0: Industrial Sensor Inputs (left)
    // Layer 1: Feature Extraction / Embedded Signal Conditioners
    // Layer 2: Deep Latent Neural Layers
    // Layer 3: Decision / Classification Output (right)
    const nodes: Node3D[] = [];
    const layers = [
      { count: 4, x: -180, color: '#00F0FF' }, // Sensor Inputs
      { count: 6, x: -80, color: '#38BDF8' },  // Feature Extractors
      { count: 5, x: 40, color: '#60A5FA' },   // Neural Core
      { count: 3, x: 150, color: '#8B5CF6' },  // Output Nodes
      { count: 1, x: 220, color: '#00F0FF' },  // Final Decision Hub
    ];

    layers.forEach((layerSpec, layerIdx) => {
      const spacing = 46;
      const yStart = -((layerSpec.count - 1) * spacing) / 2;
      for (let i = 0; i < layerSpec.count; i++) {
        nodes.push({
          x: layerSpec.x,
          y: yStart + i * spacing,
          z: (Math.sin(layerIdx * 1.2 + i) * 60),
          layer: layerIdx,
          baseRadius: layerIdx === 4 ? 6.5 : (layerIdx === 0 ? 4.5 : 3.5),
          pulsePhase: Math.random() * Math.PI * 2,
          color: layerSpec.color,
        });
      }
    });

    // Create synapic connections between adjacent layers
    const edges: [number, number][] = [];
    nodes.forEach((n1, i) => {
      nodes.forEach((n2, j) => {
        if (n2.layer === n1.layer + 1) {
          // Semi-dense connections
          if (Math.abs(n1.y - n2.y) < 95) {
            edges.push([i, j]);
          }
        }
      });
    });

    // Create flowing data packets (telemetry signals)
    const particles: Particle[] = [];
    const maxParticles = 24;
    for (let p = 0; p < maxParticles; p++) {
      const edge = edges[Math.floor(Math.random() * edges.length)];
      particles.push({
        fromNode: edge[0],
        toNode: edge[1],
        progress: Math.random(),
        speed: 0.008 + Math.random() * 0.012,
        color: Math.random() > 0.4 ? '#00F0FF' : '#8B5CF6',
      });
    }

    // Interactive mouse coordinates
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.6;
      targetMouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.6;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    let frame = 0;

    // Render loop
    const render = () => {
      frame++;
      const width = canvas.width / (Math.min(window.devicePixelRatio || 1, 2));
      const height = canvas.height / (Math.min(window.devicePixelRatio || 1, 2));

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      if (!isReducedMotion) {
        rotationAngle += 0.004;
      }

      const cosY = Math.cos(rotationAngle * 0.8 + mouseX);
      const sinY = Math.sin(rotationAngle * 0.8 + mouseX);
      const cosX = Math.cos(mouseY * 0.8);
      const sinX = Math.sin(mouseY * 0.8);

      const centerX = width * 0.5;
      const centerY = height * 0.48;
      const fov = 380;

      // Project 3D nodes into 2D plane
      const projected = nodes.map((node) => {
        // 3D rotation around Y and X
        const rotX = node.x * cosY - node.z * sinY;
        const tempZ = node.x * sinY + node.z * cosY;
        const rotY = node.y * cosX - tempZ * sinX;
        const rotZ = node.y * sinX + tempZ * cosX;

        const distance = rotZ + 420;
        const scale = fov / distance;
        return {
          px: centerX + rotX * scale,
          py: centerY + rotY * scale,
          scale: Math.max(0.2, scale),
          depth: rotZ,
          color: node.color,
          radius: node.baseRadius,
          layer: node.layer,
        };
      });

      // Draw faint circuit background grid traces
      ctx.save();
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.06)';
      ctx.lineWidth = 1;
      const traceY1 = centerY - 120;
      const traceY2 = centerY + 120;
      ctx.beginPath();
      ctx.moveTo(30, traceY1);
      ctx.lineTo(centerX - 190, traceY1);
      ctx.lineTo(centerX - 160, centerY - 60);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(30, traceY2);
      ctx.lineTo(centerX - 190, traceY2);
      ctx.lineTo(centerX - 160, centerY + 60);
      ctx.stroke();
      ctx.restore();

      // Draw Synaptic Connections (edges)
      edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        if (!p1 || !p2) return;

        const alpha = Math.min(0.55, Math.max(0.08, ((p1.scale + p2.scale) / 2) * 0.35));
        ctx.beginPath();
        ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.lineWidth = Math.max(0.6, (p1.scale + p2.scale) * 0.8);
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
      });

      // Draw and advance traveling data particles
      if (!isReducedMotion) {
        particles.forEach((p) => {
          p.progress += p.speed;
          if (p.progress >= 1) {
            // Pick a new edge
            const newEdge = edges[Math.floor(Math.random() * edges.length)];
            p.fromNode = newEdge[0];
            p.toNode = newEdge[1];
            p.progress = 0;
            p.speed = 0.009 + Math.random() * 0.014;
          }

          const n1 = projected[p.fromNode];
          const n2 = projected[p.toNode];
          if (!n1 || !n2) return;

          const px = n1.px + (n2.px - n1.px) * p.progress;
          const py = n1.py + (n2.py - n1.py) * p.progress;
          const currentScale = n1.scale + (n2.scale - n1.scale) * p.progress;

          ctx.beginPath();
          ctx.arc(px, py, Math.max(1.5, 2.8 * currentScale), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        });
      }

      // Draw Nodes sorted by depth (back to front)
      const sortedIndices = projected
        .map((n, idx) => ({ ...n, idx }))
        .sort((a, b) => a.depth - b.depth);

      sortedIndices.forEach((n) => {
        const r = Math.max(2, n.radius * n.scale);
        const pulse = Math.sin(frame * 0.05 + n.idx) * 0.5 + 0.5;

        // Glow ring around decision node and sensor nodes
        if (n.layer === 4 || n.layer === 0) {
          ctx.beginPath();
          ctx.arc(n.px, n.py, r + 4 + pulse * 3, 0, Math.PI * 2);
          ctx.strokeStyle = n.color === '#00F0FF' ? 'rgba(0, 240, 255, 0.35)' : 'rgba(139, 92, 246, 0.35)';
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        // Inner solid core
        ctx.beginPath();
        ctx.arc(n.px, n.py, r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw moving abstract object with Computer Vision detection box
      // It orbits gently around the feature extraction layer
      const targetTime = frame * 0.02;
      const targetX = centerX - 40 + Math.cos(targetTime) * 65;
      const targetY = centerY - 30 + Math.sin(targetTime * 1.5) * 45;
      const boxW = 82;
      const boxH = 58;
      const cornerLen = 10;

      // Draw the abstract target object (pulsing geometric feature)
      ctx.save();
      ctx.beginPath();
      ctx.arc(targetX, targetY, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = '#00F0FF';
      ctx.shadowColor = '#00F0FF';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Computer Vision Bounding Box
      const bx = targetX - boxW / 2;
      const by = targetY - boxH / 2;

      // Outer dashed frame
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.45)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.strokeRect(bx, by, boxW, boxH);
      ctx.setLineDash([]);

      // Solid corner brackets
      ctx.strokeStyle = '#00F0FF';
      ctx.lineWidth = 2;

      // Top-Left
      ctx.beginPath();
      ctx.moveTo(bx, by + cornerLen);
      ctx.lineTo(bx, by);
      ctx.lineTo(bx + cornerLen, by);
      ctx.stroke();

      // Top-Right
      ctx.beginPath();
      ctx.moveTo(bx + boxW - cornerLen, by);
      ctx.lineTo(bx + boxW, by);
      ctx.lineTo(bx + boxW, by + cornerLen);
      ctx.stroke();

      // Bottom-Left
      ctx.beginPath();
      ctx.moveTo(bx, by + boxH - cornerLen);
      ctx.lineTo(bx, by + boxH);
      ctx.lineTo(bx + cornerLen, by + boxH);
      ctx.stroke();

      // Bottom-Right
      ctx.beginPath();
      ctx.moveTo(bx + boxW - cornerLen, by + boxH);
      ctx.lineTo(bx + boxW, by + boxH);
      ctx.lineTo(bx + boxW, by + boxH - cornerLen);
      ctx.stroke();

      // Target Crosshair
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(targetX - 7, targetY);
      ctx.lineTo(targetX + 7, targetY);
      ctx.moveTo(targetX, targetY - 7);
      ctx.lineTo(targetX, targetY + 7);
      ctx.stroke();

      // Detection Tag
      ctx.fillStyle = 'rgba(7, 12, 26, 0.85)';
      ctx.fillRect(bx, by - 16, 76, 14);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
      ctx.lineWidth = 1;
      ctx.strokeRect(bx, by - 16, 76, 14);

      ctx.fillStyle = '#00F0FF';
      ctx.font = '9px monospace';
      ctx.fillText('CV: OBJ_DETECT', bx + 4, by - 5);

      ctx.restore();

      // Update state occasionally for readout
      if (frame % 30 === 0) {
        setTelemetryState(prev => ({
          ...prev,
          confidence: parseFloat((93.5 + Math.random() * 2.5).toFixed(1)),
          bboxCoords: {
            x: Math.round(targetX),
            y: Math.round(targetY),
            w: boxW,
            h: boxH,
          }
        }));
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden glass-panel border border-cyanAccent-500/25 shadow-2xl flex flex-col justify-between"
    >
      {/* Corner Brackets */}
      <div className="corner-bracket-tl" />
      <div className="corner-bracket-tr" />
      <div className="corner-bracket-bl" />
      <div className="corner-bracket-br" />

      {/* Top Telemetry Header Bar */}
      <div className="relative z-10 px-4 py-2.5 bg-navy-950/80 border-b border-cyanAccent-500/15 flex items-center justify-between text-[11px] font-mono text-slate-300">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-cyanAccent-300 font-semibold tracking-wider">NEURAL_CORE // SENSOR_PIPELINE</span>
        </div>
        <div className="hidden sm:flex items-center space-x-4 text-slate-400">
          <span>STREAM: <strong className="text-cyanAccent-300">{telemetryState.sampleRate}</strong></span>
          <span>CV_CONF: <strong className="text-emerald-400">{telemetryState.confidence}%</strong></span>
          <span>INFERENCE: <strong className="text-electric-400">ACTIVE</strong></span>
        </div>
      </div>

      {/* Main Interactive Canvas */}
      <div className="relative flex-1 w-full h-full">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full cursor-crosshair"
          title="Interactive Neural Topology & Sensor Flow Simulation"
        />

        {/* Floating Architectural Stage Indicators */}
        <div className="absolute top-3 left-4 pointer-events-none hidden md:block">
          <div className="px-2.5 py-1 rounded bg-navy-900/80 border border-cyanAccent-500/20 text-[10px] font-mono text-cyanAccent-300">
            ▲ SENSOR INPUT LAYER
          </div>
        </div>

        <div className="absolute top-3 right-4 pointer-events-none hidden md:block">
          <div className="px-2.5 py-1 rounded bg-navy-900/80 border border-violetAccent-500/20 text-[10px] font-mono text-violetAccent-400">
            ▼ DECISION OUTPUT NODE
          </div>
        </div>
      </div>

      {/* Bottom Pipeline Progression Flow */}
      <div className="relative z-10 px-4 py-2 bg-navy-950/85 border-t border-cyanAccent-500/15">
        <div className="flex flex-wrap items-center justify-between gap-1 text-[10px] sm:text-[11px] font-mono text-slate-400">
          <div className="flex items-center space-x-1 sm:space-x-2 text-cyanAccent-400">
            <span className="w-1.5 h-1.5 rounded-full bg-cyanAccent-400"></span>
            <span>RAW SENSOR TELEMETRY</span>
          </div>
          <span className="text-slate-600">→</span>
          <div className="flex items-center space-x-1 sm:space-x-2 text-sky-400">
            <span>FEATURE EXTRACTION</span>
          </div>
          <span className="text-slate-600">→</span>
          <div className="flex items-center space-x-1 sm:space-x-2 text-electric-400">
            <span>NEURAL WEIGHTS</span>
          </div>
          <span className="text-slate-600">→</span>
          <div className="flex items-center space-x-1 sm:space-x-2 text-emerald-400 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>INTELLIGENT DECISION</span>
          </div>
        </div>
      </div>
    </div>
  );
};
