import { css } from '../../../styled-system/css';
import { center, flex } from '../../../styled-system/patterns';
import Image from 'next/image';
import Link from 'next/link';

import TagNav from '@/components/tagNav';

export default function graphic() {
    return(
        <div className={css({bg: "linear-gradient(180deg, #7084A5 0%, #ABA6BE 57%, #D4B0B5 100%)", color:"#fff", p:"0 240px" , h:"100vh"})}>
                        <TagNav />

        </div>
)
}
