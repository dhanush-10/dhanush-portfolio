/**
 * Decorative, illustrative service graph. Not real telemetry.
 * Pure SVG with a single CSS dash animation that is disabled for reduced-motion users.
 */
export function HeroVisual() {
  const node = "fill-[#151519] stroke-[#27272a]";
  const label = "fill-[#fafafa] font-mono text-[11px]";
  const sub = "fill-[#a1a1aa] font-mono text-[9px]";
  return (
    <figure className="w-full">
      <svg viewBox="0 0 440 340" role="img" aria-label="Illustrative diagram: an API connects to a service, which writes to a database and publishes events to a message broker consumed by a worker." className="h-auto w-full">
        <style>{`.flow{stroke-dasharray:4 6;animation:dash 2.4s linear infinite}@keyframes dash{to{stroke-dashoffset:-20}}@media (prefers-reduced-motion:reduce){.flow{animation:none}}`}</style>
        <g fill="none" stroke="#38bdf8" strokeWidth="1.5" opacity="0.8">
          <path className="flow" d="M110 70 H170" />
          <path className="flow" d="M300 70 H365 V120" />
          <path className="flow" d="M210 100 V210" />
          <path className="flow" d="M365 180 V260" />
        </g>
        <g>
          <rect x="20" y="40" width="90" height="60" rx="8" className={node} />
          <text x="65" y="68" textAnchor="middle" className={label}>API</text>
          <text x="65" y="84" textAnchor="middle" className={sub}>REST</text>

          <rect x="170" y="40" width="130" height="60" rx="8" className="fill-[#151519] stroke-[#a3e635]" />
          <text x="235" y="68" textAnchor="middle" className={label}>Service</text>
          <text x="235" y="84" textAnchor="middle" className={sub}>business logic</text>

          <rect x="150" y="210" width="120" height="60" rx="8" className={node} />
          <text x="210" y="238" textAnchor="middle" className={label}>Database</text>
          <text x="210" y="254" textAnchor="middle" className={sub}>transaction</text>

          <rect x="310" y="120" width="110" height="60" rx="8" className={node} />
          <text x="365" y="148" textAnchor="middle" className={label}>Broker</text>
          <text x="365" y="164" textAnchor="middle" className={sub}>events</text>

          <rect x="310" y="260" width="110" height="60" rx="8" className={node} />
          <text x="365" y="288" textAnchor="middle" className={label}>Worker</text>
          <text x="365" y="304" textAnchor="middle" className={sub}>consumer</text>
        </g>
      </svg>
      <figcaption className="mt-2 text-center font-mono text-xs text-muted">Illustrative architecture, not live data</figcaption>
    </figure>
  );
}
