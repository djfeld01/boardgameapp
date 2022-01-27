import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'
import { useSession, signIn, signOut} from "next-auth/react"

const Random: NextPage=({})=>{
return (
    <div>Random Page</div>
)
}

export default Random;