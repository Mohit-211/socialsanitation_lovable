export function CentralFloridaMap() {
  return (
    <div className="relative overflow-hidden bg-surface p-6 sm:p-10">
      <svg viewBox="0 0 760 560" role="img" aria-labelledby="map-title map-description" className="w-full">
        <title id="map-title">Social Sanitation Central Florida service area</title>
        <desc id="map-description">A designed map highlighting Pasco, Pinellas, Hillsborough, and Polk counties.</desc>
        <path d="M118 38 571 44 639 95 614 171 657 225 635 286 689 344 650 426 589 456 532 526 423 503 355 533 277 493 194 505 139 444 76 407 102 327 58 265 93 195 69 119Z" fill="var(--background)" stroke="var(--border)" strokeWidth="3" />
        <g fill="none" stroke="var(--border)" strokeWidth="2">
          <path d="M72 191 632 188M94 314 665 310M139 442 645 425M227 41 201 498M392 42 387 526M532 48 522 517" />
          <path d="m74 268 121-77 191 120 138-122 111 96M140 443l61-129 187 103 134-107 128 116" />
        </g>
        <path d="M201 190H386V311H201Z" fill="var(--secondary)" stroke="var(--foreground)" strokeWidth="3" />
        <path d="M74 267 201 190V312L96 354Z" fill="color-mix(in oklab, var(--secondary) 55%, var(--background))" stroke="var(--foreground)" strokeWidth="3" />
        <path d="M201 312H389V417H201Z" fill="var(--primary)" stroke="var(--foreground)" strokeWidth="3" />
        <path d="M389 310H523V418H389Z" fill="color-mix(in oklab, var(--primary) 58%, var(--background))" stroke="var(--foreground)" strokeWidth="3" />
        <g fill="var(--foreground)" fontFamily="Manrope, sans-serif" fontSize="17" fontWeight="800">
          <text x="257" y="255">PASCO</text><text x="100" y="276">PINELLAS</text><text x="234" y="372">HILLSBOROUGH</text><text x="433" y="371">POLK</text>
        </g>
        <g fill="var(--foreground)"><circle cx="293" cy="312" r="7" /><circle cx="201" cy="268" r="7" /><circle cx="389" cy="362" r="7" /></g>
      </svg>
      <div className="absolute bottom-5 left-5 bg-background px-4 py-3 text-xs font-extrabold uppercase tracking-wide shadow-editorial sm:bottom-8 sm:left-8">Central Florida coverage</div>
    </div>
  );
}