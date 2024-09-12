import { css } from '../../../styled-system/css';
import { center, flex } from '../../../styled-system/patterns';
import Image from 'next/image';
import Link from 'next/link';

import { FaForward } from "react-icons/fa";
import Nav from '@/components/nav';
import TagNav from '@/components/tagNav';

export default function CwC() {
    return(
        <div className={css({h:"100vh", pt:"5rem"})}>
            <Nav />
            <div className={flex({gap:"10rem", mt:"5rem"})}>
                <div className={css({})}>
                    <Image src="/img/firstview/cwcTop.jpg" alt="" width={1500} height={1500}></Image>
                </div>
                <div className={flex({flexDirection:"column", gap:"1.4rem"})}>
                    <h2 className={css({fontSize:"3.2rem", fontWeight:"bold"})}>Connect with Cthulhu</h2>
                    <h3 className={css({fontSize:"2.4rem"})}>クトゥルフの世界へ冒険する仲間を見つけませんか？</h3>
                    <p>ネット社会から離れて自然に囲まれながら息抜きできる場所があればいいなと思いこのコンセプトにしました。そのため入口で電子機器を預かり、店内ではコーヒーを飲みながらぼーっとしたり、本を読んだりなど店内では
                        ネットから離れてゆっくりと自分の時間を過ごせるカフェにしました。隠れ家なので、たくさんの人よりも知っている人だけに来てもらえるように会員制にしました。</p>
                    <p>制作期間:３ヶ月</p>
                    <p>作品種別:1年生/個人制作</p>
                    <p>使用ツール:figma/Illustrator/HTML/CSS/JS/PHP</p>
                    <Link href="https://click.ecc.ac.jp/ecc/ymorio/CwC/" className={flex({w:"fit-content",alignItems:"center",gap:"5px", bg:"rgba(216, 208, 227, 0.50)", p:"2px 10px", borderRadius:"10px"})}>アプリへ<FaForward /></Link>
                </div>
            </div>
        </div>
    )
}