import React, { memo, useState, useEffect } from "react"
import { LoginComponentWrapper } from './style';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import QRCode from 'qrcode.react';
import * as action from './store/actionCreator.js';
export default memo(function Login() {
    // const [isShow, setIsShow] = useState(false);
    const dispatch = useDispatch();
    const { login = [] } = useSelector(
    (state) => ({
        // topBanners: state.get('recommend').get('topBanners')
        // 获取redux-reducer转换成Immutable对象的深层state
        login: {
            qrKey: state.getIn(['login', 'qrKey']),
            qr: state.getIn(['login', 'qr']),
            qrCheck: state.getIn(['login', 'qrCheck']),
            // refreshLogin: state.getIn(['login', 'refreshLogin']),
            // loginStatus: state.getIn(['login', 'loginStatus']),
            // logout: state.getIn(['login', 'logout']),
        },
    }),
    shallowEqual
    );
    
    // timer = setInterval(async () => {
    //     // dispatch(action.getQrCheckAction(login.qrKey));
    //     //   const statusRes = checkQr
    //     //   if (statusRes.code === 800) {
    //     //     alert('二维码已过期,请重新获取')
    //     //     clearInterval(timer)
    //     //   }
    //     //   if (statusRes.code === 803) {
    //     //     // 这一步会返回cookie
    //     //     clearInterval(timer)
    //     //     alert('授权登录成功')
    //     //     // await this.getLoginStatus()
    //     //   }
    //     }, 3000)
    //   })
    // const timer = setInterval(async () => {
    //     dispatch(action.getQrCheckAction(login.qrKey));
    // },1000)
    // requestAnimationFrame(() => {dispatch(action.getQrCheckAction(login.qrKey))},10000)
    useEffect( () => {
        // 在组件渲染之后发送网络请求
        dispatch(action.getQrKeyAction());
        // await dispatch(action.getQrAction(login.qrKey));
        // dispatch(
        //     action.getQrAction(
        //     )
        // );
    }, [dispatch]);

    useEffect(() => {
        dispatch(action.getQrAction(login.qrKey));
        // requestAnimationFrame(() => {
        //     dispatch(
        //         action.getQrCheckAction(login.qrKey)
        //     );
        // }, 1000)
    }, [login.qrCheck, dispatch]);
    const check = () => {
        requestAnimationFrame(() => {
            dispatch(
                action.getQrCheckAction(login.qrKey)
            );
            console.log(login.qrCheck)
            // check()
        }, 1000)
    }
    
    useEffect(() => {
        console.log(login.qrKey)
        // dispatch(action.getQrCheckAction(login.qrKey));
        check()
        // console.log('login.qrCheck', login.qrCheck);
        if (login.qrCheck) {
            dispatch(action.getLoginStatusAction(login.qrKey));
        }
    }, [login.qrKey, dispatch]);

    const [isQr, setIsQr] = useState(true);

    const showForm = () => {
        setIsQr(false);
    }
    const showQr = () => {
        setIsQr(true);
    }
    const shutDown = () => {
        const container = document.querySelector('.lg-container');
        container.style.display = 'none';
        // setIsShow(true);
        // console.log(isShow)
    }
    return (
        <LoginComponentWrapper>
            <div
                className="lg-container"
                // style={{display: (isShow ? 'none'  :  'flex') }}
            >
                <div className="btn-title">
                    <button
                        className={isQr ? '' : 'focus'}
                        onClick={showForm}
                    >
                        账号登录
                    </button>
                    <button
                        className={isQr ? 'focus' : ''}
                        onClick={showQr}
                    >
                        扫码登录
                    </button>
                </div>
                <div className={isQr ? 'lg-form' : 'lg-form active'}>
                    <h2>帐号密码登录</h2>
                    <p>
                        推荐使用<span>快速安全登录</span>，防止盗号
                    </p>
                    <input type="text" placeholder="支持手机号/邮箱登录" />
                    <input type="password" placeholder="密码" />
                    <button>授权并登录</button>
                    <div className="form-foot">
                        <span>找回密码</span>
                        <span>新用户注册</span>
                        <span>意见反馈</span>
                    </div>
                </div>
                <div className={isQr ? 'lg-qr active' : 'lg-qr'}>
                    <div className="qr-img">
                        <QRCode
                            value={login.qr}
                        />
                    </div>
                    <div className="tip">
                        请使用网易云音乐扫描二维码登录“QQ音乐”
                    </div>
                    <div className="qr-foot">
                        QQ与微信账号的音乐资产、付费特权不互通
                    </div>
                </div>
                <div className="show" onClick={shutDown}>
                    <span className="iconfont">&#xe661;</span>
                </div>
            </div>
        </LoginComponentWrapper>
    );
});