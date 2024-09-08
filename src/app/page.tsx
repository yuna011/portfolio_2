import { css } from '../../styled-system/css';
import { center, flex } from '../../styled-system/patterns';
import Image from 'next/image';
import Link from 'next/link';

import { FaForward } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <div className={css({bg: "linear-gradient(180deg, #7084A5 0%, #ABA6BE 57%, #D4B0B5 100%)", color:"#fff", p:"0 240px"})}>
      <div className={css({p:"0", position:"absolute", zIndex:"-0.5"})}><Image src="/img/cloud.svg" alt='' width={600} height={600}/></div>
      <div className={css({ fontSize: "20rem", fontWeight: 'bold' })}>Portfolio</div>
      <div>
        <h2 className={center({m:"10rem 0 3rem",fontSize:"2rem"})}>Profile</h2>
        <div className={flex({justifyContent:"center", alignItems:"center", gap:"8rem"})}>
          <div>
            <p className={center({fontSize:"1.2rem"})}>もりお　ゆうな</p>
            <p className={css({fontSize:"4rem", fontWeight:"bold"})}>森尾　優菜</p>
          </div>
          <div className={css({lineHeight:"2rem"})}>
            <p>ECCコンピュータ専門学校/マルチメディア研究学科/Webデザインコース/26年卒業予定</p>
            <p>2004/11/10/兵庫県出身</p>
            <p>好きなものはボカロとゲーム🎮</p>
            <p>日常を少しおもしろくしたいを原動力に日々勉強中</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className={center({m:"10rem 0 3rem",fontSize:"2rem"})}>Work</h2>
        <div className={flex({justifyContent:"center", alignItems:"center", flexWrap:"wrap", gap:"3rem"})}>
          <div>
            <Link href={"#"}>
            <p className={center({bg:"rgba(188, 205, 232, 0.40)",w:"312px", h:"250px", borderRadius:"10px"})}><Image src="/img/sumeru-to.svg" alt="" width={150} height={150}/></p>
            <p>すめる〜と</p>
            <p>#1年生後期#チーム制作</p>
            </Link>
          </div>
          <div>
            <Link href={"#"}>
            <p className={center({bg:"rgba(152, 19, 51, 0.40)", w:"312px", h:"250px", borderRadius:"10px"})}><Image src="/img/.svg" alt="" width={100} height={100}/></p>
            <p>歴てく</p>
            <p>#2年生前期#チーム制作</p>
            </Link>
          </div>
          <div>
            <Link href={"#"}>
            <p className={center({bg:"rgba(142, 172, 202, 0.40)", w:"312px", h:"250px", borderRadius:"10px"})}><Image src="/img/dekita.svg" alt="" width={200} height={200}/></p>
            <p>できた！ノート</p>
            <p>#2年生前期#個人制作</p>
            </Link>
          </div>
          <div>
              <Link href={"#"}>
              <p className={center({bg:"rgba(15, 18, 43, 0.40)", w:"312px", h:"250px", borderRadius:"10px"})}><Image src="/img/graphic/meisi.svg" alt="" width={150} height={150}/></p>
              <p>名刺</p>
              <p>#1年生#個人制作</p>
              </Link>
          </div>
          <div>
              <Link href={"#"}>
              <p className={center({bg:"rgba(136, 77, 66, 0.40)", w:"312px", h:"250px", borderRadius:"10px"})}><Image src="/img/graphic/candle.svg" alt="" width={150} height={150}/></p>
              <p>中崎町キャンドルナイト</p>
              <p>#1年生後期#個人制作</p>
              </Link>
          </div>
          <div>
              <Link href={"#"}>
              <p className={center({bg:"rgba(59, 152, 191, 0.40)",w:"312px", h:"250px", borderRadius:"10px"})}><Image src="/img/graphic/goodmoningall.svg" alt="" width={150} height={150}/></p>
              <p>キャラ紹介</p>
              <p>#1年生~</p>
              </Link>
          </div>
        </div>
        <div>

          <Link href="/web" className={flex({float:"right",alignItems:"center",gap:"5px", bg:"rgba(216, 208, 227, 0.50)", p:"2px 10px", borderRadius:"10px"})}>See more<FaForward /></Link>
          
        </div>
      </div>
      
        <h2 className={center({m:"10rem 0 3rem",fontSize:"2rem"})}>Contact</h2>
      <div className={center({})}>
        <p>morio.yuna01@gmail.com</p>
      </div>
        <div className={flex({justifyContent:"center",gap:"1rem",p:"1rem 0" ,fontSize:"2.4rem"})}>
          <IoLogoGithub />
          <FaXTwitter />
        </div>

    </div>
  )
}