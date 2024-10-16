'use client';

import { HIGHLIGHT_TYPE } from '@/lib/types';
import { HTMLAttributes, useEffect } from 'react';
import Image from 'next/image';

type HIGHLIGHT_SLIDER_TYPE = {
  items: HIGHLIGHT_TYPE[];
} & HTMLAttributes<HTMLDivElement>;

import './HighlightSlider.styles.css';

export default function HighlightSlider({ items, className }: HIGHLIGHT_SLIDER_TYPE) {
  useEffect(() => {
    const list_els = document.querySelectorAll('.Highlight__lists') as NodeListOf<HTMLUListElement>;

    list_els.forEach((el) => {
      let percent = 0;
      const parent = el.parentElement as HTMLDivElement;

      setInterval(() => {
        percent += -0.2;

        if (percent < -0.9) {
          parent.style.maxWidth = 'unset';
        }
        if (percent < -1) {
          percent = 0;
          el.style.transitionDuration = '0s';
          el.style.transform = `translateX(0%)`;
        } else {
          el.style.transitionDuration = '1s';
          el.style.transform = `translateX(${percent * 100}%)`;
        }
      }, 5000);
    });
  }, []);

  return (
    <div className={className ? `Highlight ${className}` : 'Highlight'}>
      {Array(3)
        .fill(undefined)
        .map((_, idx) => (
          <ul className="Highlight__lists" key={idx}>
            {items.map((highlight) => (
              <li className="Highlight__item" key={highlight.id}>
                <div>
                  <Image src={highlight.icon} alt={`${highlight.title} Icon`} width={32} height={32} />
                </div>

                <h4>{highlight.title}</h4>
              </li>
            ))}
          </ul>
        ))}
    </div>
  );
}
