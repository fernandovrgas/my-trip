import { ReactNode } from 'react'
import Link from 'next/link'

import * as S from './styles'

type LinkWrapperProps = {
  href: string
  children: ReactNode
}

const LinkWrapper = ({ children, href }: LinkWrapperProps) => (
  <S.Wrapper>
    <Link href={href}>{children}</Link>
  </S.Wrapper>
)

export default LinkWrapper
