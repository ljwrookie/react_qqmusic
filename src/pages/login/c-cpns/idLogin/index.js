import React, { memo } from 'react';
import { IdLoginComponentWrapper } from './style';

export default memo(function IdLogin() {
    return (
        <IdLoginComponentWrapper className="lg-form">
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
        </IdLoginComponentWrapper>
    );
});
