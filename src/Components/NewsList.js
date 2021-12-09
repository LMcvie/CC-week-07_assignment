import NewsItem from './NewsItem.js';
import './NewsList.css'

const NewsList = ({ newsArticles, loaded, filterText }) => {

    if (!loaded || !newsArticles) {
        return (<p>Loading....</p>);
    }

    let filteredArticles = newsArticles;


    if (filterText && filterText.filterText) {
      filteredArticles = newsArticles.filter(article => article.title.toUpperCase().includes(filterText.filterText.toUpperCase()));
        
    }


    const newsList = filteredArticles.map((article, index) => {
        return (
            <NewsItem key={index} article={article} index={index}></NewsItem>
        );
    });

    return (
        <div id='newsList'>
            <h2>Filtered Articles</h2>
            {newsList}
        </div>
    );

}


export default NewsList;