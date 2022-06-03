import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useEffect } from 'react';
import Table from '../components/Table';
import RandomCode from '../RandomCode';
import { isIncluded, runRandomValue } from '../lib/random'

export default function Home({ prevCode }) {
  
  const [rows, setRows] = useState([prevCode]);
  const [isRunRandom, setIsRunRandom] = useState(false);
  const soLuongCode = 676000;
  const soKyTuCode = 9
  const giaTriCode = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789'
  const soKyTuSeri = 6;
  const giaTriSeri = '0123456789'

  function handleClick() {
    if (!isRunRandom) {
      setIsRunRandom( isRunRandom => true );
    }
  }

  function handleChange() {
    console.log('Change')
  }

  useEffect(() => {
    setRows(rows => [...prevCode]);
  }, []);

useEffect(() => {
  if (rows.length > 0) {
    setIsRunRandom(isRunRandom => true);
  }
},[rows])

useEffect(() => {
    if (isRunRandom && rows.length < soLuongCode) {
      runRandom();
    }
    
    async function runRandom() {
      let code = await runRandomUniqueValue(soKyTuCode, giaTriCode, 'code');
      let seri = await runRandomUniqueValue(soKyTuSeri, giaTriSeri, 'seri');
      let row = { code, seri };
      setRows(rows => [...rows, row]);
      setIsRunRandom(isRunRandom => false);
      updateCode(row);
    }

    async function updateCode (data) {
      const dataNew = JSON.stringify(data)
      const response = await fetch("/api/update-code", {
          method: "POST", 
          body: dataNew,
          headers: {
            'Content-Type': 'application/json',
        'Accept': 'application/json'
          }
      })

      const res = await response.json()
      // router.push("/")
  }
    
    async function runRandomUniqueValue(soKyTu, giaTri, type) {
      const response = await fetch("/api/code", {
        method: "POST", 
        headers: {
          'Content-Type': 'application/json',
      'Accept': 'application/json'
        }
    })

    console.log(await response.json());

    let rows = await response.json();    
      const result = new Promise( (resolve, reject) => {
        let randomNumber = runRandomValue(soKyTu, giaTri);
        while ( isIncluded(randomNumber, rows, type) ) {
          randomNumber = runRandomValue(soKyTu, giaTri);
        }
        resolve(randomNumber)
      })
      return result;
      }

}, [isRunRandom, rows]) 

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          A An Random: <a href="https://nextjs.org">{rows.length}</a>
        </h1>
      <button onClick={handleClick}>Start random</button>
      <Table className={styles.ul} rows={rows} onChange={handleChange}>
      </Table>
      </main>
</div>
  )  
}

export async function getStaticProps(context) {
  const prevCode = RandomCode();
  return {
    props: {
      prevCode: prevCode }, // will be passed to the page component as props
  }
}
