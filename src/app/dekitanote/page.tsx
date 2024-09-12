import { css } from '../../../styled-system/css';
import { center, flex } from '../../../styled-system/patterns';
import Image from 'next/image';
import Link from 'next/link';
import { FaForward } from "react-icons/fa";
import Nav from '@/components/nav';
import TagNav from '@/components/tagNav';

export default function Dekitanote() {
    return(
        <div className={css({h:"100vh", pt:"5rem"})}>
            <Nav />
            <div className={flex({gap:"10rem", mt:"5rem"})}>
                <div className={css({})}>
                    <Image src="/img/firstview/dekitaTop.png" alt="" width={1500} height={1500}></Image>
                </div>
                <div className={flex({flexDirection:"column", gap:"1.4rem"})}>
                    <h2 className={css({fontSize:"3.2rem", fontWeight:"bold"})}>できた！ノート</h2>
                    <h3 className={css({fontSize:"2.4rem"})}>ろぼと一緒にできた！を増やそう</h3>
                    <p>できた！ノートは今日できたことを記録していくアプリです。できた！が増えていくとアプリ内のキャラクターがどんどん感情を覚えていき、一緒に成長していくことができます。
                        無理のない小さな目標で続けるので継続力や目標達成力を身につけることができます。実際にノートに書いているかのように意識して制作しました。
                    </p>
                    <p>制作期間:3ヶ月</p>
                    <p>作品種別:2年生/個人制作</p>
                    <p>使用ツール:figma/Illustrator/aftereffect/pug/sass/js/</p>
                    <Link href="https://click.ecc.ac.jp/ecc/ymorio/dekitanote/public/" className={flex({w:"fit-content",alignItems:"center",gap:"5px", bg:"rgba(216, 208, 227, 0.50)", p:"2px 10px", borderRadius:"10px"})}>アプリへ<FaForward /></Link>
                </div>
            </div>
        </div>
    )
}