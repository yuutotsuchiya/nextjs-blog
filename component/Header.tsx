import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color:#333;
    color:#fff;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Title = styled.h1`
    font-size: 24px;
    & span{
        font-size:24px;
        padding-left: 20px;
    }
`
const Nav = styled.ul`
    font-size: 24px;
    list-style:none;
`
const Navitem = styled.li`
    font-size: 15px;
    `

export const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Title>ブログ<span>ゆゆうとブログ</span></Title>
            <Nav>
                <Navitem><Link href="/"><a>このブログについて</a></Link></Navitem>
            </Nav>
        </HeaderContainer>
    )
}
export default Header
