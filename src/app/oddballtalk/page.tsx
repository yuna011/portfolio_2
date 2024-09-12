import { css } from '../../../styled-system/css';
import { center, flex } from '../../../styled-system/patterns';
import Image from 'next/image';
import Link from 'next/link';

import { FaForward } from "react-icons/fa";
import Nav from '@/components/nav';
import TagNav from '@/components/tagNav';

export default function ODDBALLTALK() {
    return(
        <div className={css({h:"100vh", pt:"5rem"})}>
            <Nav />
            <div className={flex({gap:"10rem", mt:"5rem"})}>
                <div className={css({})}>
                    <Image src="/img/firstview/oddballtalk.svg" alt="" width={800} height={800}></Image>
                </div>
                <div className={flex({flexDirection:"column", gap:"1.4rem"})}>
                    <h2 className={css({fontSize:"3.2rem", fontWeight:"bold"})}>ODDBALLTALK</h2>
                    <h3 className={css({fontSize:"2.4rem"})}>変わった趣味を語り合える！？趣味を語りあうことが目的のマッチングアプリ</h3>
                    <p>周りに自分の趣味を話せる相手がいない人のための完全匿名のマッチングアプリ。他のSNSと違いマッチングに特化しているため、簡単に同じ趣味を持つ人と出会うことができます。
                        また、友達機能やトーク履歴、既読表示等がないため、その場で同じ趣味を持つ人と気軽に語り合うことができます。
                    </p>
                    <p>制作期間:３日</p>
                    <p>作品種別:1年生/チーム制作</p>
                    <p>担当:デザイン</p>
                    <p>使用ツール:figma/Illustrator/Next.js/</p>
                    <Link href="/" className={flex({w:"fit-content",alignItems:"center",gap:"5px", bg:"rgba(216, 208, 227, 0.50)", p:"2px 10px", borderRadius:"10px"})}>アプリへ<FaForward /></Link>
                </div>
            </div>
        </div>
    )
}