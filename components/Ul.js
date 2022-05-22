import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function Ul({ codes }) {
  useEffect(() => {
    
  }, [codes])  

  return (
    <>
    <ul>
    {codes.map((item, index) => {
    return <li key={index}>{item}</li>
  })}
  </ul>
    </>
  )
}
