import { getBenefits, getHighlights, getUsers } from '@/lib/api';

import Image from 'next/image';
import HeroBackground from '@/public/images/hero-background.png';

import './Home.styles.css';
import Tooltip from '@/components/Tooltip';

export default async function Home() {
  const [users, benefits, highlights] = await Promise.all([getUsers(), getBenefits(), getHighlights()]);

  return (
    <main className="Home">
      <section className="Home__hero">
        <Image
          className="Hero__background"
          src={HeroBackground}
          alt="Hero Background"
          priority={true}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 720px, 2400px"
        />

        <div className="Hero__information">
          <div className="Hero__headline">
            <Tooltip position="left" className="Hero__tooltip">
              풀타임, 파트타임
            </Tooltip>

            <h1>
              <p>최고의 실력을 가진</p>
              <p>외국인 인재를 찾고 계신가요?</p>
            </h1>

            <h2>
              <p>법률 및 인사관리 부담없이</p>
              <p>1주일 이내에 원격으로 채용해보세요.</p>
            </h2>

            <h3>개발자가 필요하신가요?</h3>

            <div className="Hero__benefits">
              {benefits.map((benefit) => (
                <div className="Benefits__item" key={benefit.id}>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="Hero__slider">
            <div className="Slider">
              <div className="Slider__wrapper">
                {users.map((user) => (
                  <div className="Slider__item" key={user.id}></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="Hero__highlight">
          <ul className="Highlight__lists">
            {highlights.map((highlight) => (
              <li className="Highlight__item" key={highlight.id}>
                <div>
                  <Image src={highlight.icon} alt={`${highlight.title} Icon`} width={32} height={32} />
                </div>

                <h4>{highlight.title}</h4>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
