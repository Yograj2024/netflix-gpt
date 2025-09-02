import GPT_SerachBar from './GPT_SerachSec';
import GPT_serachResult from './GPT_searchResult';

const GptSearchPage = () => {

    return <section className={`lg:px-[1.25rem]`}>
        <GPT_SerachBar/>
        <GPT_serachResult/>
    </section> 
}; 

export default GptSearchPage;