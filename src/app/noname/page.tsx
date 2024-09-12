import { css } from '../../../styled-system/css';
import { center, flex } from '../../../styled-system/patterns';
import Image from 'next/image';
import Link from 'next/link';

import { FaForward } from "react-icons/fa";
import Nav from '@/components/nav';
import TagNav from '@/components/tagNav';

export default function Noname() {
    return(
        <div className={css({h:"100vh", pt:"5rem"})}>
            <Nav />
            <div className={flex({gap:"10rem", mt:"5rem"})}>
                <div className={css({})}>
                    <Image src="/img/firstview/nonameTop.svg" alt="" width={2000} height={2000}></Image>
                </div>
                <div className={flex({flexDirection:"column", gap:"1.4rem"})}>
                    <h2 className={css({fontSize:"3.2rem", fontWeight:"bold"})}>「no-name」</h2>
                    <h3 className={css({fontSize:"2.4rem"})}>現実から離れてリラックスできるカフェ</h3>
                    <p>Connect with Cthulhuはクトゥルフ神話TRPGを一緒に遊ぶ人を見つけることができるアプリです。アプリ内ではセッションの募集や参加ができ、アプリ内でキャラクターシートの確認や細かいルールなどの確認、日程調節などができるので簡単にクトゥルフ神話TRPGをプレイすることができます。
                        また、プロフィールでそのプレイヤーがどんなプレイスタイルが好きか簡単に確認もでき、相性のいいプレイヤーを見つけることもできます
                    </p>
                    <p>制作期間:３ヶ月</p>
                    <p>作品種別:1年生/個人制作</p>
                    <p>使用ツール:XD/Illustrator/Photoshop/HTML/CSS</p>
                    <Link href="https://click.ecc.ac.jp/ecc/ymorio/%e3%80%8cno-name%e3%80%8d/" className={flex({w:"fit-content",alignItems:"center",gap:"5px", bg:"rgba(216, 208, 227, 0.50)", p:"2px 10px", borderRadius:"10px"})}>サイトへ<FaForward /></Link>
                </div>
            </div>
        </div>
    )
}