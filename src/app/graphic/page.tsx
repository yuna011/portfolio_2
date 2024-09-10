import { css } from '../../../styled-system/css';
import { center, flex } from '../../../styled-system/patterns';
import Image from 'next/image';
import Link from 'next/link';

import Nav from '@/components/nav';
import TagNav from '@/components/tagNav';

export default function graphic() {
    return(
        <div className={css({h:"100vh", pt:"5rem"})}>
            <Nav />
                <h2 className={center({fontSize:"2rem"})}>Graphic</h2>
                <TagNav />
                <div className={flex({justifyContent:"center", alignItems:"center", flexWrap:"wrap", gap:"3rem",m:"2rem 0"})}>
                    <div>
                        <Link href={"/nonameGraphic"}>
                        <p className={center({bg:"rgba(250, 250, 247, 0.40)", w:"31rem", h:"22rem", borderRadius:"10px"})}><Image src="/img/graphic/noname.svg" alt="" width={250} height={250}/></p>
                        <p>「no-name」</p>
                        <p>#1年生前期#個人制作</p>
                        </Link>
                    </div>
                    <div>
                        <Link href={"/meisi"}>
                        <p className={center({bg:"rgba(15, 18, 43, 0.40)", w:"31rem", h:"22rem", borderRadius:"10px"})}><Image src="/img/graphic/meisi.svg" alt="" width={150} height={150}/></p>
                        <p>名刺</p>
                        <p>#1年生#個人制作</p>
                        </Link>
                    </div>
                    <div>
                        <Link href={"/candle"}>
                        <p className={center({bg:"rgba(136, 77, 66, 0.40)", w:"31rem", h:"22rem", borderRadius:"10px"})}><Image src="/img/graphic/candle.svg" alt="" width={140} height={140}/></p>
                        <p>中崎町キャンドルナイト</p>
                        <p>#1年生後期#個人制作</p>
                        </Link>
                    </div>
                    <div>
                        <Link href={"/character"}>
                        <p className={center({bg:"rgba(59, 152, 191, 0.40)",w:"31rem", h:"22rem", borderRadius:"10px"})}><Image src="/img/graphic/goodmoningall.svg" alt="" width={140} height={140}/></p>
                        <p>キャラ紹介</p>
                        <p>#1年生~</p>
                        </Link>
                    </div>
            </div>

        </div>
)
}
