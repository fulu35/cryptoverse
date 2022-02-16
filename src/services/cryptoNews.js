import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '378d2b7f38msh558fe05876b0130p1f136fjsndc23ec79d10c'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });


export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi', // store Name
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: (newsCategory, count) => createRequest(`/news/search?q=${newsCategory}&safeSearch=off&textFormat=raw&freshness=Day&count=${count}`)
        })
    })
});

export const {
    useGetCryptoNewsQuery, // üstte getCryptos var adını ordan alıyor
} = cryptoNewsApi
