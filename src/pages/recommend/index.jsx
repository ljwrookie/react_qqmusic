import React, { memo, useEffect } from 'react';
import request from '@/service/request';
import { RecmdMain } from './style';

export default memo(function Recommend() {
    useEffect(() => {
        request({
            url: '/top/category',
        }).then((res) => {
            console.log(res);
        });
    }, []);
    return <RecmdMain>Recommend</RecmdMain>;
});
