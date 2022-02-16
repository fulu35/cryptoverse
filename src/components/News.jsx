import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNews';

const News = () => {

    const { data, isFetching } = useGetCryptoNewsQuery();
    const globalStats = data?.data?.stats;
    console.log('"data news',data);

    if (isFetching) return 'Loading...';

    return (
        <div>
            News
        </div>
    )
}

export default News
