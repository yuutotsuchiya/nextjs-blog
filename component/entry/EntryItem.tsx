import React from "react"
import Link from "next/link"
import styled from "styled-components"

const EntryContainer = styled.section`
`

interface Image {
    width:number
    height:number
    url:string
}


interface Category{
    id:string
    name:string
}

export interface Entry {
    title: string
    body: string
    createdAt: string
    categories:Category[]
    id: string
    image: Image
    publishedAt: string
    revisedAt: string
    updatedAt: string
}

export const EntryItem: React.FC<Entry> = (props) => {
    return (
        <EntryContainer>
            <h2><Link href={`/entry/${props.id}`}><a>{props.title}</a></Link></h2>
            <figure>
                <img src={props.image.url} />
            </figure>
            {/* <div dangerouslySetInnerHTML={{html: props.body}} /> */}
        </EntryContainer>
    )
}

export default EntryItem
