import {useState, useEffect} from 'react';
import NewsFilter from '../Components/NewsFilter.js';
import NewsList from '../Components/NewsList.js';
import './NewsContainer.css'

const NewsContainer = () => {


    const [newsIds, setNewsIds] = useState();
    const [newsArticles,setNewsArticles]= useState();
    const [loaded,setLoaded] = useState(false);
    const [filter,setFilter] = useState();

    useEffect(() => {
        getIds();
    },[]);

    useEffect(() => {
        getNews();
    },[newsIds]);


    const getNews = async () => {

        if (!newsIds){
            return;
        }

            try {
                let response = await Promise.all(newsIds.map(id => fetch (`https://hacker-news.firebaseio.com/v0/item/${id}.json`)));
                let data = await Promise.all(response.map(res => res.json()));
                await setNewsArticles(data);
                await setLoaded(true);
            }
    
            catch (error) {
                console.log('error');
            }
        
       
        
    }

    const getIds = async () => {
        try {
            const response = await fetch (`https://hacker-news.firebaseio.com/v0/topstories.json`)
            const data = await response.json();
            await setNewsIds(data.slice(0,20));
        }

        catch (error) {
            console.log('error');
        }
    }

    return(
        <div>
            <h1> Hacker News V2</h1>
            <NewsFilter onFilterSubmit = {(filterText) => setFilter(filterText)}></NewsFilter>
            <NewsList newsArticles = {newsArticles} loaded = {loaded} filterText = {filter}></NewsList>
        </div>
    );

}


export default NewsContainer;