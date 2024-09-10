import { center, flex } from '../../styled-system/patterns';
import {css} from '../../styled-system/css';
import Link from 'next/link';

export default function Nav() {
    return(
        <div>
            <nav>
                <ul className={flex({justifyContent:"flex-end",gap:"2.4rem",fontSize:"2.4rem"})}>
                <li className={css({_hover:{color:"#1E4062"}})}><Link href="/">Home</Link></li>
                <li className={css({_hover:{color:"#1E4062"}})}><Link href="/web">Work</Link></li>
                <li className={css({_hover:{color:"#1E4062"}})}><Link href="/">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}