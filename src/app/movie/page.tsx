import { css } from '../../../styled-system/css';
import { center, flex } from '../../../styled-system/patterns';
import Image from 'next/image';
import Link from 'next/link';


import Nav from '@/components/nav';
import TagNav from '@/components/tagNav';

export default function movie() {
    return(
        <div className={css({h:"100vh", pt:"5rem"})}>
            <Nav />
            <div className={flex({gap:"6rem", m:"4rem 0", flexWrap:"wrap", justifyContent:"center"})}>
                <video src="/img/movie/darekanoutade.mp4" width={384} height={288} controls/>
                <video src="/img/movie/hanatava.mov" width={384} height={288} controls/>
                <video src="/img/movie/yu-enme-.mp4" width={384} height={288}controls/>
           </div>
        </div>
    )
}