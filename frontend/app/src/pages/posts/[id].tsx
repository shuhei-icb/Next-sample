import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";


type PostProps = {
  id: string
}

const Post: NextPage<PostProps> = (props) => {
  const { id } = props
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="public/favicon.ico" />
      </Head>
      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
        <p>{`/post/${id}に対応するページ`}</p>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: '1',
      },
    },
    {
      params: {
        id: '2',
      },
    },
    {
      params: {
        id: '3',
      },
    }
  ]

  return { paths, fallback: false}
}

interface PostParams extends ParsedUrlQuery {
  id: string
}

// ビルド時に実行 propsを返し、コンポーネントへ渡す
export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (context) => {
  return {
    props: {
      id: context.params!['id'],
    },
  }
}

// context　ビルド時に使用できるデータが含まれている
//          params
//          locale


export default Post