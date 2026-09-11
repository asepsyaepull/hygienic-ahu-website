import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { SITE_CONTENT } from '../data/site-content';
import { EASE_PREMIUM, fadeInUp, staggerContainer, staggerItem, viewportConfig } from '../utils/animations';

interface ParsedMetric {
  format: (progress: number) => string;
}

function parseMetric(str: string): ParsedMetric {
  // Check range pattern like "4-8 Mgg" or "4 - 8 Mgg"
  const rangeMatch = str.match(/^(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)(.*)$/);
  if (rangeMatch) {
    const min = parseFloat(rangeMatch[1]);
    const max = parseFloat(rangeMatch[2]);
    const suffix = rangeMatch[3] || '';
    return {
      format: (progress: number) => {
        const curMin = Math.round(min * progress);
        const curMax = Math.round(max * progress);
        return `${curMin}-${curMax}${suffix}`;
      },
    };
  }

  // Single number with possible prefix and suffix, e.g. "500+", "99.9%", "> 20 Bar"
  const singleMatch = str.match(/^([^\d.]*)(\d+(?:\.\d+)?)(.*)$/);
  if (singleMatch) {
    const prefix = singleMatch[1] || '';
    const numStr = singleMatch[2];
    const target = parseFloat(numStr);
    const suffix = singleMatch[3] || '';
    const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
    return {
      format: (progress: number) => {
        const cur = target * progress;
        return `${prefix}${cur.toFixed(decimals)}${suffix}`;
      },
    };
  }

  return { format: () => str };
}

interface CountUpMetricProps {
  value: string;
  delay?: number;
}

const CountUpMetric: React.FC<CountUpMetricProps> = ({ value, delay = 0 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayValue, setDisplayValue] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return value;
    }
    const parsed = parseMetric(value);
    return parsed.format(0);
  });

  useEffect(() => {
    if (!isInView) return;

    // Respect reduced motion accessibility
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const parsed = parseMetric(value);

    const controls = animate(0, 1, {
      duration: 1.8,
      delay,
      ease: EASE_PREMIUM,
      onUpdate: (latest) => {
        setDisplayValue(parsed.format(latest));
      },
      onComplete: () => {
        setDisplayValue(value);
      },
    });

    return () => controls.stop();
  }, [isInView, value, delay]);

  return <span ref={ref}>{displayValue}</span>;
};

export const MetricStrip: React.FC = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={fadeInUp}
      className="relative z-20 -mt-6 sm:-mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="machined-shell p-1.5 sm:p-2">
        <div className="machined-core p-4 sm:p-7 bg-white">
          <motion.div
            variants={staggerContainer(0.09, 0.1)}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8"
          >
            {SITE_CONTENT.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-start p-3 sm:p-0 rounded-xl sm:rounded-none bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0 sm:border-l sm:border-slate-100 sm:first:border-l-0 sm:pl-6 lg:pl-8"
              >
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-xl sm:text-3xl lg:text-4xl font-black text-[#0F2D3F] font-mono-spec tracking-tight">
                    <CountUpMetric value={metric.value} delay={idx * 0.1} />
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">
                  {metric.label}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium font-mono-spec mt-0.5">
                  {metric.sublabel}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
