import React, { memo, useEffect, useContext } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import * as action from '../../store/actionCreator.js';
import QRCode from 'qrcode.react';
import { QrLoginComponentWrapper } from './style';
import { LoginContext } from '../../../../components/app-header';

export default memo(function QrLogin() {
    const [isShow, setIsShow] = useContext(LoginContext);
    const dispatch = useDispatch();
    const { login = [] } = useSelector(
        (state) => ({
            login: {
                qrKey: state.getIn(['login', 'qrKey']),
                qr: state.getIn(['login', 'qr']),
                qrCheck: state.getIn(['login', 'qrCheck']),
            },
        }),
        shallowEqual
    );

    useEffect(() => {
        // 在组件渲染之后发送网络请求
        dispatch(action.getQrKeyAction());

        const timer = setInterval(async () => {
            dispatch(action.getQrCheckAction(login.qrKey));
            const statusRes = login.qrCheck;
            if (statusRes.code === 800) {
                console.log('二维码已过期,请重新获取');
                clearInterval(timer);
            }
            if (statusRes.code === 802 || statusRes.code === 803) {
                // 这一步会返回cookie
                clearInterval(timer);
                console.log('授权登录成功');
                setIsShow(false);
                // await this.getLoginStatus()
            }
        }, 3000);
        return () => {
            // 在组件卸载之前取消定时器
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        dispatch(action.getQrAction(login.qrKey));
    }, [login.qrCheck]);

    useEffect(() => {
        if (login.qrCheck) {
            dispatch(action.getLoginStatusAction(login.qrKey));
        }
    }, [login.qrKey]);
    return (
        <QrLoginComponentWrapper className="lg-qr">
            <div className="qr-img">
                <QRCode value={login.qr} />
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
