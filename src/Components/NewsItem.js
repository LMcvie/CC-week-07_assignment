import './NewsItem.css';

const NewsItem = ({article,index}) => {
    index+=1;
 
    return (

        <div className = 'article'>

            <h2>{index}: {article.title}</h2>

            <ul>
                <li>Type: {article.type}</li>
                <li><a href = {article.url}>{article.url}</a></li>
                <li>Author: {article.by}</li>
            </ul>
            
        </div>

    );
}

export default NewsItem;