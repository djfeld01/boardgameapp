import React from 'react'
import styles from '../../styles/Games.module.css'
import Link from 'next/link'
import AddGame from '../../components/AddGame'

function games() {
    const games=["game 1", "game 2", "game 3", "game 4", "game 5"]
    return (
        <div className={styles.main}>
        {games.map((game,index)=>{
           return ( <Link href={`/games/${index}`} key={index}><a className={styles.game}>{game}
        </a></Link>)
        })}
        <Link href={'/games/addGame'}><a className={styles.game}><AddGame /></a></Link>
        </div>
    )
}

export default games