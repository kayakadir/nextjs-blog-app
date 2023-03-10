import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs Blog App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.hero}>
          <h1 className={styles.herotitle}>Kadir Kaya</h1>
          <div className={styles.sociallinks}>
            <Link href={'https://twitter.com/kadirdirkaya'} target='_blank' className={styles.sociallink}>Twitter</Link>
            <Link href={'https://www.linkedin.com/in/kadir-kaya-5a790081/'} target='_blank' className={styles.sociallink}>Linkedin</Link>
          </div>
      </div>
      {posts.map((post, index) => (
        <div className='blog'>
        <Link href={`/post/${index}`} className={styles.blogtitle}><h2>{post.title} </h2></Link>
        <div className='blog-text'>
        {post.text}
        </div>
        <div className={styles.blogdate}>{post.date}</div>
      </div>
      ))}
      
    </div>
  )
}
//
Home.getInitialProps = async (ctx) => {
  const res = await fetch('https://kadirinblogu.netlify.app/api/posts')
  const json = await res.json()
  return { posts: json.posts }
}

export default Home