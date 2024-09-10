import { css } from '../../../styled-system/css';
import { center, flex } from '../../../styled-system/patterns';
import Image from 'next/image';
import Link from 'next/link';

import Nav from '@/components/nav';
import TagNav from '@/components/tagNav';

export default function Web() {
    return(
        <div className={css({h:"100vh", pt:"5rem"})}>
            <Nav />
            <div>
                <h2 className={center({fontSize:"2rem"})}>Web</h2>
                <TagNav />
                <div className={flex({justifyContent:"center", alignItems:"center", flexWrap:"wrap", gap:"3rem"})}>
                    <div>
                        <Link href={"/noname"}>
                        <p className={center({bg:"rgba(250, 250, 247, 0.40)", w:"31rem", h:"22rem", borderRadius:"10px"})}><Image src="/img/noname.svg" alt="" width={100} height={100}/></p>
                        <p>「no-name」</p>
                        <p>#1年生前期#個人制作</p>
                        </Link>
                    </div>
                    <div>
                        <Link href={"/sumeruto"}>
                        <p className={center({bg:"rgba(188, 205, 232, 0.40)",w:"31rem", h:"22rem", borderRadius:"10px"})}><Image src="/img/sumeru-to.svg" alt="" width={150} height={150}/></p>
                        <p>すめる〜と</p>
                        <p>#1年生後期#チーム制作</p>
                        </Link>
                    </div>
                    <div>
                        <Link href={"/cwc"}>
                        <p className={center({bg:"rgba(255, 252, 220, 0.40)", w:"31rem", h:"22rem", borderRadius:"10px"})}><Image src="/img/cwc.svg" alt="" width={150} height={150}/></p>
                        <p>Connect with Chulhu </p>
                        <p>#1年生後期#個人制作</p>
                        </Link>
                    </div>
                    <div>
                        <Link href={"/oddballtalk"}>
                        <p className={center({bg:"rgba(29, 31, 76, 0.40)", w:"31rem", h:"22rem", borderRadius:"10px"})}><Image src="/img/obt.svg" alt="" width={210} height={210}/></p>
                        <p>ODDBALLTALK</p>
                        <p>#1年生後期#チーム制作</p>
                        </Link>
                    </div>
                    <div>
                        <Link href={"/rekiteku"}>
                        <p className={center({bg:"rgba(152, 19, 51, 0.40)", w:"31rem", h:"22rem", borderRadius:"10px"})}><Image src="/img/.svg" alt="" width={100} height={100}/></p>
                        <p>歴てく</p>
                        <p>#2年生前期#チーム制作</p>
                        </Link>
                    </div>
                    <div>
                        <Link href={"/dekitanote"}>
                        <p className={center({bg:"rgba(142, 172, 202, 0.40)", w:"31rem", h:"22rem", borderRadius:"10px"})}><Image src="/img/dekita.svg" alt="" width={200} height={200}/></p>
                        <p>できた！ノート</p>
                        <p>#2年生前期#個人制作</p>
                        </Link>
                    </div>
                </div> 
            </div>
        </div>
    )
}
