import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './panel.css';
/**
* @author
* @function Panel
**/

const Panel = (props) => {
  const dispatch = useDispatch();
  const newsApiKey = useSelector(state => state.newsApiKey);
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${newsApiKey}`).then((response)=>{
      dispatch({type: 'SET_NEWS_DATA', value: response.data.articles})
    })
  }, []);
  
  const newsDataArray = useSelector(state => state.newsDataArray)
  return(
    <div className="panel">
      <h3 className='panel-head'>Trending</h3>
      <div className='news-list'>
          { newsDataArray.length > 0 &&
            newsDataArray.map((news)=>{
              debugger;
              return (
              <div className='news-item'>
                {news.title}
                <br/>
                <small class="author">{`- ${news.source.name}`}</small>
              </div>
              )
            })
          }
      </div>
    </div>
   )

 }

export default Panel