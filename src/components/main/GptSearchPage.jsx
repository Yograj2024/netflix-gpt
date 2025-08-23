import GPT_SerachBar from './GPT_SerachBar';
import GPT_serachResult from './GPT_searchResult';

const GptSearchPage = () => {

    return <section className={`pb-[3rem] lg:px-[1.25rem]`}>
        <GPT_SerachBar/>
        <GPT_serachResult/>
    </section> 
}; 

export default GptSearchPage;