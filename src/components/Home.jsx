import React from 'react';
import Post from './Post';
import '../css/home.css';

function Home(){
    return <div className='home'>
        <div className='highlight'>
            <h1>HIGHLIGHT OF THE DAY</h1>
            <div className='news'>
                <img src='https://www.livemint.com/lm-img/img/2023/06/10/600x338/CRICKET-AUS-IND-122_1686374354398_1686374561248.jpg'/>
                <div className='main-news-text'><p>India end on 151/5 at Stumps on Day 2, all eyes today on Ajinkya Rahane</p></div>
            </div> 
        </div>
        <div className='top-posts'>
            <h1>TOP NEWS</h1>
            <div className='top-news'>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            </div>
        </div>
        
    </div>
}

export default Home;