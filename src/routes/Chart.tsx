import React from 'react';
import { useQuery } from 'react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../atoms';

interface ChartProps {
    coinId: string;
}

interface IHistorical {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

function Chart({ coinId }: ChartProps) {
    const isDark = useRecoilValue(isDarkAtom);
    const { isLoading, data } = useQuery<IHistorical[]>(['openHighLowCloseValue', coinId], () => fetchCoinHistory(coinId), { refetchInterval: 10000 });
    return (
        <h1>
            {isLoading ? (
                'Loading chart...'
            ) : (
                //chart 도입하는 프로젝트에서 유용할 듯. 어떤 차트든 쓰는 방법은 비슷해보였음.
                <ApexChart
                    theme={{ mode: 'dark' }}
                    type='line'
                    series={[
                        {
                            name: 'Closing Time',
                            //에러가 뜬다면 공식문서에서 라이브러리가 부여햔 타입을 확인해보고 쓸 것
                            data: data?.map((price) => Number(price.close)) as number[],
                        },
                    ]}
                    options={{
                        theme: {
                            mode: isDark ? 'dark' : 'light',
                        },
                        chart: {
                            height: 300,
                            width: 500,
                            toolbar: {
                                show: false,
                            },
                            background: 'transparent',
                        },
                        grid: { show: false },
                        stroke: {
                            curve: 'smooth',
                            width: 4,
                        },
                        yaxis: {
                            show: false,
                        },
                        xaxis: {
                            axisBorder: { show: false },
                            axisTicks: { show: false },
                            labels: { show: false },
                            type: 'datetime',
                            categories: data?.map((price) => price.time_close),
                        },
                        fill: {
                            type: 'gradient',
                            gradient: { gradientToColors: ['#2980b9'], stops: [0, 100] },
                        },
                        colors: ['#0be881'],
                        tooltip: {
                            y: {
                                formatter: (value) => `$${value.toFixed(2)}`,
                            },
                        },
                    }}
                />
            )}
        </h1>
    );
}

export default Chart;
