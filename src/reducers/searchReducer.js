import { SEARCH_ARTICLE, FETCH_ARTICLES, FETCH_ARTICLE} from '../actions/types';

const initialState = {
    text: '',
    searchArticles: [],
    loading: false,
    article: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SEARCH_ARTICLE:
            return {
                ...state,
                text: action.payload,
                loading: false
            }
        case FETCH_ARTICLES:
            return {
                ...state,
                searchArticles: action.payload
            }
        case FETCH_ARTICLE:
            return {
                ...state,
                article: action.payload
            }
        default:
            return state
    }
}