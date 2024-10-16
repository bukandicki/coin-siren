import { FOOTER_BENEFITS } from '@/lib/constants';

import Image from 'next/image';
import Link from 'next/link';

import './Footer.styles.css';

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer__wrapper">
        <div className="Footer__about">
          <Image src="/svgs/color-logo.svg" alt="Hiperhire Logo" width={187} height={34} />

          <p>우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</p>

          <strong>010-0000-0000</strong>

          <strong>aaaaa@naver.com</strong>
        </div>

        <ul className="Footer__benefit">
          {FOOTER_BENEFITS.map((benefit) => (
            <li key={benefit.title}>
              <div>
                <Image src={benefit.icon} alt={`${benefit.title} Icon`} width={24} height={24} />
              </div>

              <strong>{benefit.title}</strong>

              <Link href="/">
                <span>바로가기</span>

                <Image src="/svgs/icon-arrow-right.svg" alt="Arrow" width={20} height={20} />
              </Link>
            </li>
          ))}
        </ul>

        <ul className="Footer__company">
          <li>
            <p>상호명</p>
            <p>하이퍼하이어</p>
            <strong>Hyperhire India Private Limited</strong>
          </li>
          <li>
            <p>대표 CEO</p>
            <p>김주현</p>
            <strong>Juhyun Kim</strong>
          </li>
        </ul>

        <ul className="Footer__details">
          <li>
            <p>사업자등록번호 CIN</p>
            <strong>427-86-01187</strong>
            <strong>U74110DL2016PTC290812</strong>
          </li>

          <li>
            <p>주소 ADDRESS</p>
            <p>서울특별시 강남대로 479, 지하 1층 238호 </p>
            <strong>D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India</strong>
          </li>
        </ul>
      </div>

      <p className="Footer__copyright">ⓒ 2023 Hyperhire</p>
    </footer>
  );
}
