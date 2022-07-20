import React from 'react';
import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';

interface ChartProps {
    coinId: string;
}

function Chart({ coinId }: ChartProps) {
    const { isLoading, data } = useQuery(['openHighLowCloseValue', coinId], () => fetchCoinHistory(coinId));
    return <h1>Chart</h1>;
}

export default Chart;
