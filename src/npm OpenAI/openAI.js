import OpenAI from 'openai';
import {openAI_apikey} from "../utils/constants"

const openai = new OpenAI({
    apiKey : openAI_apikey, // This is the default and can be omitted
    dangerouslyAllowBrowser : true
});

export default openai