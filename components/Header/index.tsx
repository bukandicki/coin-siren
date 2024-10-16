'use client';

import { useEffect } from 'react';
import { MENUS } from '@/lib/constants';

import Image from 'next/image';
import Link from 'next/link';

import './Header.styles.css';

let timeout: NodeJS.Timeout;

export default function Header() {
  const handleToggleDropdown = (e: MouseEvent) => {
    const type = e.type;
    const target = e.target as HTMLDivElement;

    if (type === 'mouseenter') {
      target.setAttribute('data-opened', 'true');
    } else {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        target.setAttribute('data-opened', 'false');
      }, 350);
    }
  };

  useEffect(() => {
    const nav_dropdown_el = document.querySelector('.Nav__dropdown[data-opened="false"]') as HTMLDivElement;

    nav_dropdown_el.addEventListener('mouseenter', handleToggleDropdown);
    nav_dropdown_el.addEventListener('mouseleave', handleToggleDropdown);

    return () => {
      nav_dropdown_el.removeEventListener('mouseenter', handleToggleDropdown);
      nav_dropdown_el.removeEventListener('mouseleave', handleToggleDropdown);
    };
  }, []);

  return (
    <header className="Header">
      <Image className="Header__logo" src="/svgs/logo.svg" width={144} height={21} alt="Hyperhire Logo" />

      <nav className="Header__nav">
        <ul className="Nav__lists">
          {MENUS.map((menu) => (
            <li className="Nav__item" key={menu.title}>
              {menu.sub_items.length ? (
                <div className="Nav__dropdown" data-opened="false">
                  <div className="Dropdown__title">
                    <span>{menu.title}</span>

                    <Image src="/svgs/icon-caret-down.svg" width={16} height={16} alt="Caret" />
                  </div>

                  <ul className="Dropdown">
                    {menu.sub_items.map((sub) => (
                      <li className="Dropdown__item" key={sub.title}>
                        <Link className="Dropdown__link" href={sub.href}>
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link className="Nav__link" href={menu.href}>
                  {menu.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <button className="Header__cta">문의하기</button>
    </header>
  );
}
