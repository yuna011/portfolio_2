import Link from 'next/link';

export default function TagNav() {
    return(
        <div>
            <Link href="/web">#webサイト・アプリ</Link>
            <Link href="/graphic">#グラフィック</Link>
            <Link href="/web">#動画</Link>
        </div>
    )
}