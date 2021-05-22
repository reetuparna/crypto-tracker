import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './panel.css';
import {GrNext} from "react-icons/gr";
/**
* @author
* @function Panel
**/

const Panel = (props) => {
  const dispatch = useDispatch();
  const newsApiKey = useSelector(state => state.newsApiKey);
  
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=crypto&pageSize=7&apiKey=${newsApiKey}`).then((response)=>{
      dispatch({type: 'SET_NEWS_DATA', value: response.data.articles})
    })
  }, []);
  
  const newsDataArray = useSelector(state => state.newsDataArray)
  return(
    <div className="panel">
      <p className='panel-head'>Trending News</p>
      <div className='news-list'>
          { newsDataArray.length > 0 &&
            newsDataArray.map((news)=>{
              return (
                <div className='news-item' onClick={() => window.open(news.url)}>
                  <div className='news-text'>
                    <div>{news.title}</div>
                    <div className="source-name">{news.source.name.toUpperCase()}</div>
                  </div>
                  <div className='news-src-link'>
                    <GrNext />
                  </div>
                </div>
              )
            })
          }
      </div>
    </div>
   )

 }

export default Panel