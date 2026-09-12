import React from 'react';

export default function FogLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[10] overflow-hidden">
      {/* Background Fog - Slower */}
      <div className="absolute inset-y-0 left-0 flex w-[200vw] opacity-90 animate-fog-bg mix-blend-screen">
        <img
          src="/fog-2.png"
          alt=""
          className="h-full w-[100vw] object-cover filter contrast-150 brightness-125"
        />
        <img
          src="/fog-2.png"
          alt=""
          className="h-full w-[100vw] object-cover filter contrast-150 brightness-125"
        />
      </div>

      {/* Foreground Fog - Faster */}
      <div className="absolute inset-y-0 left-0 flex w-[200vw] opacity-100 animate-fog-fg mix-blend-screen">
        <img
          src="/fog-1.png"
          alt=""
          className="h-full w-[100vw] object-cover filter contrast-150 brightness-150"
        />
        <img
          src="/fog-1.png"
          alt=""
          className="h-full w-[100vw] object-cover filter contrast-150 brightness-150"
        />
      </div>

      {/* Duplicated Midground Layer for 2x Intensity */}
      <div className="absolute inset-y-0 left-0 flex w-[200vw] opacity-85 animate-fog-bg mix-blend-screen">
        <img
          src="/fog-1.png"
          alt=""
          className="h-full w-[100vw] object-cover filter contrast-125 brightness-125"
        />
        <img
          src="/fog-1.png"
          alt=""
          className="h-full w-[100vw] object-cover filter contrast-125 brightness-125"
        />
      </div>
    </div>
  );
}