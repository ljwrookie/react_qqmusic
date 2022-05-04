import React, { memo, useEffect, useState, useContext } from 'react';

import { QrLoginComponentWrapper } from './style';
import { LoginContext } from '../../../../components/app-header';
import * as loginService from '../../../../service/login';
import { message } from 'antd';
export default memo(function QrLogin() {
    const [isShow, setIsShow] = useContext(LoginContext);

    const [qrTimeout, setQrTimeout] = useState(false);

    const [qr, setQr] = useState();
    //关注英文
    

    let timer;
    const qrLogin = async () => {
        clearInterval(timer);
        // 获取二维码key
        let res = await loginService.getQrKey();
        let key = res.data.unikey;
        // setQrKey(key);
        console.log(key);
        // 生成二维码
        let res2 = await loginService.getQr(key);
        let qrurl = res2.data.qrimg;
        setQr(qrurl);
        timer = setInterval(async () => {
            let statusRes = await loginService.getQrCheck(key);
            console.log(Date.now() , statusRes);
            // console.log(statusRes.data);

            if (statusRes.code === 803) {
                // 这一步会返回cookie
                clearInterval(timer);
                let res3 = await loginService.getLoginStatus();
                if (res3.data.account !== null) {
                    console.log(res3);
                    setIsShow(false);
                    message.success({
                        content: '登录成功',
                        // className: 'custom-class',
                        style: {
                            marginTop: '5vh',
                            // boxShadow: '0 0 10px #000',
                            borderRadius: '5px',
                        },
                    });
                }
    
                setIsShow(false);    
                
            } else if (statusRes.code === 802) {
                message.info({
                    content: '正在授权',
                    // className: 'custom-class',
                    style: {
                        marginTop: '5vh',
                        // boxShadow: '0 0 10px #000',
                        borderRadius: '5px',
                    },
                });
            }
            if (statusRes.code === 800) {
                message.info({
                    content: '二维码超时，已重新加载',
                    // className: 'custom-class',
                    style: {
                        marginTop: '5vh',
                        // boxShadow: '0 0 10px #000',
                        borderRadius: '5px',
                    },
                });
                // dispatch(action.getQrKeyAction());
                clearInterval(timer);
                setQrTimeout(!qrTimeout);
            }
        }, 3000);
    }

    useEffect(() => {
        
        qrLogin();
        return () => {
            // 在组件卸载之前取消定时器
            clearInterval(timer);
        };
    }, [qrTimeout]);

    return (
        <QrLoginComponentWrapper className="lg-qr">
            <div className="qr-img">
                <img src={qr} alt='' />
                {/* {qrTimeout ? (<button onClick={() => { setQrTimeout(false) }}>刷新</button>) : null} */}
            </div>
            <div className="tip">
                请使用网易云音乐扫描二维码登录“QQ音乐”
            </div>
            <div className="qr-foot">
                QQ与微信账号的音乐资产、付费特权不互通
            </div>
        </QrLoginComponentWrapper>
    );
});
