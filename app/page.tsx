import Image from 'next/image';
import HeroBackground from '@/public/images/hero-background.png';

import './Home.styles.css';

export default async function Home() {
  return (
    <main className="Home">
      <section className="Home__hero">
        <Image
          className="Hero__background"
          src={HeroBackground}
          alt="Hero Background"
          priority={true}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 720px, 1024px"
        />

        <div className="Hero__information">
          <div className="Hero__headline">
            <div className="Hero__tooltip">
              <span>풀타임, 파트타임</span>
            </div>

            <h1>최고의 실력을 가진 외국인 인재를 찾고 계신가요?</h1>
            <h2>법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</h2>
            <h3>개발자가 필요하신가요?</h3>

            <div className="Hero__benefits">
              {Array(3)
                .fill('fake_value')
                .map((i, idx) => (
                  <div className="Benefits__item" key={idx}>
                    <h4>{i}</h4>
                    <p></p>
                  </div>
                ))}
            </div>
          </div>

          <div className="Hero__slider"></div>
        </div>

        <div className="Hero__highlight">
          <ul className="Highlight__lists">
            {Array(5)
              .fill('fake_value')
              .map((i, idx) => (
                <li className="Highlight__item" key={idx}>
                  {i}
                </li>
              ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
