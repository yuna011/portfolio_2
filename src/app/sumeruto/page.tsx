import { css } from '../../../styled-system/css';
import { center, flex } from '../../../styled-system/patterns';
import Image from 'next/image';
import Link from 'next/link';

import { FaForward } from "react-icons/fa";
import Nav from '@/components/nav';
import TagNav from '@/components/tagNav';

export default function Sumeruto() {
    return(
        <div className={css({h:"100vh", pt:"5rem"})}>
            <Nav />
            <div className={flex({gap:"10rem", mt:"5rem"})}>
                <div className={css({})}>
                    <Image src="/img/firstview/sumeruto.svg" alt="" width={1500} height={1500}></Image>
                </div>
                <div className={flex({flexDirection:"column", gap:"1.4rem"})}>
                    <h2 className={css({fontSize:"3.2rem", fontWeight:"bold"})}>すめる〜と</h2>
                    <h3 className={css({fontSize:"2.4rem"})}>スメルハラスメントで悩まない生活へ</h3>
                    <p>とはスメルハラスメントという社会問題に着目し少しでも気にしてる人や我慢している人たちが過ごしやすい環境を提供します。電車内の香水や体臭などのニオイで通勤・通学の際に
                        嫌な思いをしている人を対象に乗車しているユーザーが口コミで匂いの種類などを共有し、電車内の匂いをUIデザインで表現することで自分の苦手なニオイのする車両を避けて乗車することができます。
                    </p>
                    <p>制作期間:4ヶ月</p>
                    <p>作品種別:1年生/チーム制作</p>
                    <p>担当:フロントエンド・動画作成</p>
                    <p>使用ツール:figma/Illustrator/Next.js/</p>
                    <Link href="https://2023-teamproject.vercel.app/" className={flex({w:"fit-content",alignItems:"center",gap:"5px", bg:"rgba(216, 208, 227, 0.50)", p:"2px 10px", borderRadius:"10px"})}>アプリへ<FaForward /></Link>
                </div>
            </div>
        </div>
    )
}