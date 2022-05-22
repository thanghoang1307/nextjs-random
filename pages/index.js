import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { useEffect } from 'react';
import Ul from '../components/Ul';

export default function Home() {
  const [codes, setCodes] = useState([]);
  const [number, setNumber] = useState(0);
  const [isRunRandom, setIsRunRandom] = useState(false);
  const soLuongCode = 1000;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleClick() {
    if (!isRunRandom) {
      setIsRunRandom( isRunRandom => true );
    }
  }

  function handleChange() {
    console.log('Change')
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // async function randomNumber() {
  //   let randomNumber;
  //     do { randomNumber = Math.floor(Math.random()*676000) }
  //     while ( codes.includes(randomNumber) )
  //     return randomNumber
  //   }
useEffect(() => {
  if (codes.length > 0) {
    setIsRunRandom(isRunRandom => true);
  }

},[codes])
useEffect(() => {
    if (isRunRandom && codes.length < soLuongCode) {
      runRandom();
    }
    
    async function runRandom() {
      let code = await randomNumber();
      setIsRunRandom(isRunRandom => false);
      setCodes(codes => [...codes, code]);
    }
    
    async function randomNumber() {
      const result = new Promise( (resolve, reject) => {
        let randomNumber = makeid(9);
        while ( isIncluded(randomNumber) ) {
          randomNumber = makeid(9);
        }
        resolve(randomNumber)
      })
      return result;
      }
  
      function isIncluded(randomNummber) {
        console.log(codes);
        if (codes.some(item => { return item == randomNummber })) {
          return true
        } else {
          return false
        }
      }

      function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }

}, [isRunRandom]) 

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          A An Random: <a href="https://nextjs.org">{codes.length}</a>
        </h1>
      <button onClick={handleClick}>Start random</button>
      <Ul className={styles.ul} codes={codes} onChange={handleChange}>
      </Ul>
      </main>
</div>
  )

  
}