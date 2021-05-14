import React, { useContext } from 'react'
import './NewsContent.css'
import Card from './Card'
import Container from '@material-ui/core/Container';
import { setstate } from '../../contextapi';

function NewsContent() {
  const {

    news, newResult, setloadmore, loadmore
  } = useContext(setstate);
  return (

    <Container maxWidth='md'>
      <div className="content">
        <div className="downlod_main">
          <span>
            For the best experience use inshort app on your smart phone </span>

          <a href="https://apps.apple.com/us/app/news-in-shorts/id892146527"

          >
            <img
              alt="app store"
              height="80%"
              src="https://assets.inshorts.com/website_assets/images/appstore.png"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.nis.app&referrer=utm_source=inshorts%20mobile">
            <img
              alt="play store"
              height="80%"
              src="https://assets.inshorts.com/website_assets/images/playstore.png"
            />
          </a>


        </div>
        {
          news.map((newsItem) => (

            <Card newsItem={newsItem} key={newsItem.title} />
          ))
        }
        <hr />
        {
          loadmore <= newResult && <>
            <button className="lodemore" onClick={() => setloadmore(loadmore + 10)}>Load more</button>
          </>
        }
      </div>

    </Container>

  )
}

export default NewsContent
