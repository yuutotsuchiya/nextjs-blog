import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '~/component/Header'
import EntryDetail from '~/component/entry/EntryDetall';
import { Entry } from '~/component/entry/EntryItem'
import { EntryData } from '~/types/api';
import { client } from '~/utils/client';

interface EntryDetailview {
    entry: Entry
}

const EntryDetailview : NextPage<EntryDetailview> = (props) => {
    console.log(props)
    return(
        <div>
            <Header />
        <main>
            <article>
                <h1>トップ</h1>
                <EntryDetail { ...props.entry } />
            </article>
        </main>
        </div>
    )
}

import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'node:querystring'

interface Params extends ParsedUrlQuery {
    id:string
}
export const getStaticPaths: GetStaticPaths = async () => {
    console.log(1)
   const { totalCount } = await client.get<EntryData>({
       endpoint:'entries',
       queries: {
        offset:0,
        limit:0,
        fields:'id'
       }
   })
   console.log(totalCount)
   const e = await client.get<EntryData>({
        endpoint:'entries',
        queries: {
        limit:totalCount
    }
   })
   const paths = e.contents.map((content) => `/entry/${content.id}`)
   return{paths,fallback:false}
}

export const getStaticProps: GetStaticProps<EntryDetailview,Params> = async (content) => {
    const id = content.params?.id
    const entry = await client.get<Entry>({ endpoint: 'entries',contentId: id})
    return{
        props:{
            entry
        },
    };
};
export default EntryDetailview