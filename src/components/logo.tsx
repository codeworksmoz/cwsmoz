
import React from 'react';

interface LogoProps {
  className?: string;
  showDevices?: boolean;
  showText?: boolean;
}

export function Logo({ className = "h-10 w-auto", showDevices = true, showText = true }: LogoProps) {
  return (
    <div className={className}>
      <svg width="100%" height="100%" viewBox="0 0 680 420" role="img" xmlns="http://www.w3.org/2000/svg">
        <title>Codeworks Moçambique logo</title>
        <desc>Logo adaptável para temas claro e escuro</desc>
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B00"/>
            <stop offset="100%" stopColor="#FFD000"/>
            <animateTransform attributeName="gradientTransform" type="rotate" from="0 0.5 0.5" to="360 0.5 0.5" dur="6s" repeatCount="indefinite"/>
          </linearGradient>
          <linearGradient id="gradS" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B00"/>
            <stop offset="100%" stopColor="#FFD000"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          
          <style>
            {`
              .logo-text-dynamic { fill: #1A2230; transition: fill 0.3s ease; }
              .dark .logo-text-dynamic { fill: #ffffff; }
              .device-outline { stroke: #1A2230; stroke-width: 5; fill: none; transition: stroke 0.3s ease; }
              .dark .device-outline { stroke: #ffffff; }
              .logo-accent { fill: #FF6B00; }
            `}
          </style>
        </defs>

        <g>
          {showDevices && (
            <>
              {/* LAPTOP - Contorno grosso e fundo do navegador */}
              <rect x="182" y="92" width="160" height="100" rx="7" className="device-outline" />
              <g fontFamily="'Courier New', Courier, monospace" fontSize="8" fontWeight="bold">
                <text x="194" y="115" fill="#FF6B00" filter="url(#glow)">&lt;code&gt;</text>
                <text x="194" y="135" className="logo-text-dynamic">Dev_Moz</text>
                <text x="194" y="155" fill="#FFD000" filter="url(#glow)">_Studio</text>
              </g>
              <text x="328" y="186" fontFamily="'Segoe UI', Arial, sans-serif" fontSize="16" fontWeight="900" fill="url(#gradS)" textAnchor="end" filter="url(#glow)">CW</text>

              {/* TELEMÓVEL - Contorno grosso e fundo do navegador */}
              <rect x="390" y="88" width="68" height="120" rx="10" className="device-outline" />
              <g fontFamily="'Courier New', Courier, monospace" fontSize="7" fontWeight="bold">
                <text x="402" y="120" fill="#FF6B00">const</text>
                <text x="402" y="135" className="logo-text-dynamic">learn</text>
                <text x="402" y="150" fill="#FFD000">() =&gt;</text>
                <text x="402" y="165" className="logo-text-dynamic">MOZ</text>
              </g>
              <text x="448" y="195" fontFamily="'Segoe UI', Arial, sans-serif" fontSize="12" fontWeight="900" fill="url(#gradS)" textAnchor="end" filter="url(#glow)">MOZ</text>

              {/* </> central */}
              <circle cx="340" cy="238" r="32" fill="#ffffff" stroke="url(#grad)" strokeWidth="3" filter="url(#glow)"/>
              <text x="340" y="246" fontFamily="'Courier New', Courier, monospace" fontSize="20" fontWeight="bold" fill="#FF6B00" textAnchor="middle" filter="url(#glow)">&lt;/&gt;</text>
            </>
          )}

          {/* NOME: CODEWORKS MOZ - Se showDevices for false, centralizamos ou mantemos a curva */}
          {showText && (
            <g transform={!showDevices ? "translate(0, -60)" : ""}>
              <text transform="translate(239,279) rotate(-308)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="18" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">C</text>
              <text transform="translate(251,291) rotate(-316)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="18" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">O</text>
              <text transform="translate(265,304) rotate(-324)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="18" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">D</text>
              <text transform="translate(280,313) rotate(-332)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="18" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">E</text>
              <text transform="translate(296,320) rotate(-340)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="18" fontWeight="900" fill="#FF6B00" textAnchor="middle">W</text>
              <text transform="translate(313,325) rotate(-348)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="18" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">O</text>
              <text transform="translate(331,328) rotate(-356)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="18" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">R</text>
              <text transform="translate(349,328) rotate(-4)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="18" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">K</text>
              <text transform="translate(367,325) rotate(-12)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="18" fontWeight="900" fill="#FF6B00" textAnchor="middle">S</text>
              <circle cx="384" cy="320" r="4" fill="#FFD000" filter="url(#glow)"/>
              <text transform="translate(400,313) rotate(-28)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="18" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">M</text>
              <text transform="translate(415,304) rotate(-36)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="18" fontWeight="900" className="logo-text-dynamic" textAnchor="middle">O</text>
              <text transform="translate(429,291) rotate(-44)" fontFamily="'Segoe UI',Arial,sans-serif" fontSize="18" fontWeight="900" fill="#FFD000" textAnchor="middle">Z</text>
            </g>
          )}
        </g>
      </svg>
    </div>
  );
}
