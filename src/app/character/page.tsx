import { css } from '../../../styled-system/css';
import { center, flex } from '../../../styled-system/patterns';
import Image from 'next/image';
import Link from 'next/link';

import Nav from '@/components/nav';
import TagNav from '@/components/tagNav';

export default function Character() {
    return(
        <div className={css({h:"100%", pt:"5rem"})}>
            <Nav />
            <p className={center({m:"6rem", fontSize:"1.6rem"})}>クトゥルフ神話TRPGというゲームで使うキャラクターの紹介ポスターです</p>
            <div className={flex({gap:"6rem", mb:"4rem", flexWrap:"wrap", justifyContent:"center"})}>
                <div>
                    <Image src="/img/character/kaikou.png" alt='' width={250} height={250}></Image>
                    <p>傀逅</p>
                </div>
                <div>
                    <Image src="/img/character/kirukiru.png" alt='' width={250} height={250}></Image>
                    <p>キルキルイキル</p>
                </div>
                <div>
                    <Image src="/img/character/akuseka.png" alt='' width={250} height={250}></Image>
                    <p>悪の組織が世界を救ったら悪いですか？</p>
                </div>
                <div>
                    <Image src="/img/character/gdm.png" alt='' width={250} height={250}></Image>
                    <p>Good morning ALL</p>
                </div>
                <div>
                    <Image src="/img/character/akuseka.webp" alt='' width={250} height={250}></Image>
                    <p>悪の組織が世界を救ったら悪いですか？(修正版)</p>
                </div>
                <div>
                    <Image src="/img/character/syouseka.webp" alt='' width={250} height={250}></Image>
                    <p>少年少女が世界を滅ぼしたら悪いですか？</p>
                </div>
            </div>
        </div>
    )
}