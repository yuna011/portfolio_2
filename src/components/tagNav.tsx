import { center, flex } from '../../styled-system/patterns';
import {css} from '../../styled-system/css';
import Link from 'next/link';

export default function TagNav() {
    return(
        <div className={center({m:"1.4rem"})}>
            <Link href="/web">#webサイト・アプリ</Link>
            <Link href="/graphic">#グラフィック</Link>
            <Link href="/movie">#動画</Link>
        </div>
    )
}