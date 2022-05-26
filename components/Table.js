import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function Ul({ rows }) {
  useEffect(() => {
    
  }, [rows])  

  return (
    <>
    <table>
    <thead>
      <tr>
        <th>Mã</th>
        <th>Số seri</th>
      </tr>
    </thead>
    <tbody>
    {rows.map((item, index) => {
    return <tr key={index}><td>{item.code}</td><td>{item.seri}</td></tr>
  })}
  </tbody>
  </table>
    </>
  )
}
