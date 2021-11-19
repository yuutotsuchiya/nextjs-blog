import type { NextPage } from 'next'
import Head from 'next/head'
import image from 'next/image'
import Header from '~/component/Header'
import EntryItem from '~/component/entry/EntryItem';
import { EntryData } from '~/types/api';
import { client } from '~/utils/client';
interface Home {
  entries: EntryData
}

const Home: NextPage<Home> = (props) => {
  console.log(props.entries)
  return (
    <div>
      <Header />
      <main>
        <article>
          <h1>トップ</h1>
          {
            props.entries.contents.map((entry) => <EntryItem {...entry} key={entry.id} />)
          }
        </article>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  const [entries] = await Promise.all([
    client.get({
      endpoint: 'entries',
      queries: {
        orders: '-publishedAt',
        offset: 0,
        limit: 10,
        // fields: 'id,title,categories,tags,publishedAt,image,description'
      }
    })
  ])
  return {
    props: {
      entries
    },
  };
};
export default Home
