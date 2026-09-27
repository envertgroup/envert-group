import React, { useState } from 'react';

export default function EditorialImage({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[16/10]',
  domain = 'ENGINEERING',
  caption = '',
}) {
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-forest-dark border border-charcoal/15 ${aspectRatio} group`}>
      {/* Background Graphic Blueprint / Fallback */}
      <div className="absolute inset-0 bg-[#0B241C] flex flex-col justify-between p-6 overflow-hidden">
        {/* Architectural Grid Lines */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `linear-gradient(#A68A58 1px, transparent 1px), linear-gradient(90deg, #A68A58 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        ></div>

        {/* Clean Top Branding */}
        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-earth tracking-wider uppercase">
          <span><span className="normal-case">EnVERT</span> GROUP</span>
          <span>{domain}</span>
        </div>

        {/* Center Editorial Motif */}
        <div className="relative z-10 my-auto text-center py-4">
          <svg className="w-12 h-12 mx-auto text-earth/50 stroke-current mb-2" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <p className="text-sm font-heading font-semibold text-paper tracking-wide uppercase">
            {alt}
          </p>
        </div>

        {/* Bottom Location */}
        <div className="relative z-10 flex items-center justify-between text-xs font-mono text-paper/60">
          <span>EnVERT Group</span>
          <span>Kolkata, India</span>
        </div>
      </div>

      {/* Actual Photographic Layer if available and loads */}
      {!hasError && (
        <img
          src={src}
          alt={alt || "EnVERT Group Engineering & Industrial Installation"}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          className={`relative z-20 w-full h-full object-cover transition-opacity duration-500 editorial-img ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
        />
      )}

      {/* Bottom Vignette Caption */}
      {caption && (
        <div className="absolute bottom-0 inset-x-0 z-30 bg-gradient-to-t from-forest-dark/95 via-forest-deep/70 to-transparent p-4 flex items-center justify-between text-[11px] font-mono text-paper/90">
          <span className="text-earth font-medium uppercase truncate mr-2">{domain}</span>
          <span className="text-paper/70 hidden sm:inline truncate">{caption}</span>
        </div>
      )}
    </div>
  );
}
