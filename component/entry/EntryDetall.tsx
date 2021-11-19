import React from "react"
import Link from "next/link"
import styled from "styled-components"
import { Entry } from "./EntryItem"

const EntryContainer = styled.section`
`

export const EntryDetail: React.FC<Entry> = (props) => {
    return (
        <EntryContainer>
            <h2><Link href={`/entry/${props.id}`}><a>{props.title}</a></Link></h2>
            <ul>
                {
                    props.categories.map((category) => {
                        return <li key= {category.id}>{category.name}</li>
                    })
                }
            </ul>
            <figure>
                <img src={props.image.url} />
            </figure>
            <div dangerouslySetInnerHTML={{__html:props.body}} />
        </EntryContainer>
    )
}

export default EntryDetail
