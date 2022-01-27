import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as TEST from '@code-bucket/board-game-geek/dist/index'
import axios from 'axios'
import Link from 'next/link'
import { useSession, signIn, signOut} from "next-auth/react"

const Home: NextPage = ({}) => {
  const {data: session} = useSession();

  return (

    <div className={styles.main}>
      {(session) ? (
        <div className={styles.header}> {session.user.name}'s Boardgame App</div>
      ) : (
        <div className={styles.header}> Boardgame App </div>
      )
      
      }
      
      <Link href="/games">
      <a className={styles.roundButton}>Game Collection</a>
      </Link>
      <div className={styles.roundButton}>Game Plays</div>
      <div className={styles.roundButton}>Game Chooser</div>
      {(session) ? (<>
        <div className={styles.roundButton} onClick={()=>signOut()}>Logout</div>
        <Link href="/updateUser"><div className={styles.roundButton}>Update User Info</div></Link></>
      ): (
        <div className={styles.roundButton} onClick={()=>signIn()}>Login</div>
        
        )}
      

      
    </div>
  )
  }


export default Home




