// Example from https://beta.reactjs.org/learn

import { useState } from 'react'
import styles from './extratox.module.css'

function ExtraTox() {
  return (
    <>
    <div className={styles.container}>
      <span className={styles.h}>Sponsors</span>
      <div className={styles.sponsors}>
        <div className={styles.bg}>
          <a href="https://t.me/Tcp_bots" className={styles.text}>
            <img src='./tmwad.png' alt='TMWAD IMG' width={200} height={50}/>
          </a>
        </div>
      </div>
    <div className={styles.bgt}>
      <a href="https://www.buymeacoffee.com/mrprovider" className={styles.text}>
        Become Sponsor +
      </a>
    </div>
    </div>
    </>
  )
}

export default ExtraTox;
