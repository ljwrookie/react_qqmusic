import React, { memo, useState, useContext } from 'react';
import { LoginComponentWrapper } from './style';
import QrLogin from './c-cpns/qrLogin';
import IdLogin from './c-cpns/idLogin';
import { LoginContext } from '../../components/app-header';
export default memo(function Login() {
    // const [isShow, setIsShow] = useState(false);
    const [isShow, setIsShow] = useContext(LoginContext);
    const [isQr, setIsQr] = useState(true);

    const showForm = () => {
        setIsQr(false);
    };
    const showQr = () => {
        setIsQr(true);
    };
    const shutDown = () => {
        const container = document.querySelector('.lg-container');
        container.style.display = 'none';
        setIsShow(false);
        // setIsShow(true);
        // console.log(isShow)
    };
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
                {/* 切换组件 */}
                {isQr ? <QrLogin /> : <IdLogin />}
                <div className="show" onClick={shutDown}>
                    <span className="iconfont">&#xe661;</span>
                </div>
            </div>
        </LoginComponentWrapper>
    );
});
