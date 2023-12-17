import * as React from 'react'

import * as types from '@/lib/types'

import { PageHead } from './PageHead'
import styles from './styles.module.css'

export const Page404: React.FC<types.PageProps> = ({ site }) => {
  const title = site?.name || '网页不存在'

  return (
    <>
      <PageHead site={site} title={title} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>你访问了错误的网址哦～</h1>
          <p>
            <a
              href="https://nuaa.vip"
              style={{ textDecoration: 'none', color: 'orange', fontWeight: 'bold' }}
              target="_self">
              <strong>返回首页 ↗</strong>
            </a>
          </p>

          <img
            src='/404.png'
            alt='404 Not Found'
            className={styles.errorImage}
          />
        </main>
      </div>
    </>
  )
}
