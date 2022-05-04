import React, { memo, useContext } from 'react';
import { IdLoginComponentWrapper } from './style';

import * as loginService from '../../../../service/login';


import { message } from 'antd';
import { LoginContext } from '../../../../components/app-header';

export default memo(function IdLogin() {
    const [isShow, setIsShow] = useContext(LoginContext);

    const loginWithPAP = async() => {
        console.log('loginWithPAP');
        let res = await loginService.getLoginWithPhoneAndPassword(
            phoneRef.current.value,
            passwordRef.current.value
        );
        if(res.code === 200) {
            
            let res3 = await loginService.getLoginStatus();
            if (res3.data.account !== null) {
                console.log(res3)
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
            else {
                message.error({
                    content: '登录失败，请勿频繁登录',
                    // className: 'custom-class',
                    style: {
                        marginTop: '5vh',
                        // boxShadow: '0 0 10px #000',
                        borderRadius: '5px',
                    },
                });
            }
        }
        else {
            phoneRef.current.value = null; 
            passwordRef.current.value = null; 
            message.error({
                content: '账号或密码错误',
                // className: 'custom-class',
                style: {
                    marginTop: '5vh',
                    // boxShadow: '0 0 10px #000',
                    borderRadius: '5px',
                },
            });
        }
    };
    const phoneRef = React.createRef();
    const passwordRef = React.createRef();
    return (
        <IdLoginComponentWrapper className="lg-form">
            <h2>帐号密码登录</h2>
            <p>
                推荐使用<span>快速安全登录</span>，防止盗号
            </p>
            <input ref={ phoneRef} type="text" placeholder="支持手机号/邮箱登录" />
            <input ref={ passwordRef} type="password" placeholder="密码" />
            <button onClick={loginWithPAP}>授权并登录</button>
            <div className="form-foot">
                <span>找回密码</span>
                <span>新用户注册</span>
                <span>意见反馈</span>
            </div>
        </IdLoginComponentWrapper>
    );
});
