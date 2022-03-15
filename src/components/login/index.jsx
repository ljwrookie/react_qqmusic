import {
    LoginForm, ProFormText,
    ProFormCaptcha, ProFormCheckbox,
    ModalForm,
} from '@ant-design/pro-form';
import QRCode from 'qrcode.react';
import {
    UserOutlined,
    MobileOutlined,
    LockOutlined,
    AlipayCircleOutlined,
    TaobaoCircleOutlined,
    WeiboCircleOutlined,
    PlusOutlined,
} from '@ant-design/icons';
import { message, Button, Tabs, Space } from 'antd';
// import type { CSSProperties } from 'react';
import { useState, memo } from 'react';
import { ThemeCoverWrapper } from './style';
let LoginType = 'phone' | 'account';

// const iconStyles: CSSProperties = {
//   marginLeft: '16px',
//   color: 'rgba(0, 0, 0, 0.2)',
//   fontSize: '24px',
//   verticalAlign: 'middle',
//   cursor: 'pointer',
// };
const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};
export default memo( function Login() {
  const [loginType, setLoginType] = useState('phone');
    return (
        <ThemeCoverWrapper>
            <ModalForm
                width="500px"
                // height="500px"
                // title="登录"
                title="欢迎登录"
                trigger={<span className="login">点击登录</span>}
                autoFocusFirstInput
                modalProps={{
                    onCancel: () => console.log('run'),
                }}
                onFinish={async (values) => {
                    await waitTime(2000);
                    console.log(values.name);
                    message.success('提交成功');
                    return true;
                }}
            >
                <LoginForm
                    // logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
                    // title="QQ音乐"
                    // subTitle="QQ音乐"
                    actions={
                        <Space>
                            其他登录方式
                            <AlipayCircleOutlined />
                            {/* style={iconStyles} */}
                            <TaobaoCircleOutlined />
                            <WeiboCircleOutlined />
                        </Space>
                    }
                >
                    <Tabs activeKey={loginType} onChange={(activeKey) => setLoginType(activeKey)}>
                        <Tabs.TabPane key={'account'} tab={'账号密码登录'} />
                        <Tabs.TabPane key={'phone'} tab={'手机号登录'} />
                        <Tabs.TabPane key={'qrCode'} tab={'二维码登录'} />
                    </Tabs>
                    {loginType === 'account' && (
                        <>
                            <ProFormText
                                name="username"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <UserOutlined className={'prefixIcon'} />,
                                }}
                                placeholder={'用户名: admin or user'}
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入用户名!',
                                    },
                                ]}
                            />
                            <ProFormText.Password
                                name="password"
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined className={'prefixIcon'} />,
                                }}
                                placeholder={'密码: ant.design'}
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入密码！',
                                    },
                                ]}
                            />
                        </>
                    )}
                    {loginType === 'qrCode' && (
                        <div
                            // style={{
                            //     float: 'right',
                            // }}
                            style={{
                  // marginRight: '200px',
                              
                            }}
                        >
                            <QRCode
                  style={{
                                  marginTop:'10px',
                                    marginLeft: '150px',
                                    marginRight: '50px',
                                    marginBottom: '10px',
                                }}
                                value="https://music.163.com/login?codekey=ddce1a73-26f4-4a5e-930d-cc3e24c7c2d2"
                            />
                        </div>
                    )}
                    {loginType === 'phone' && (
                        <>
                            <ProFormText
                                fieldProps={{
                                    size: 'large',
                                    prefix: <MobileOutlined className={'prefixIcon'} />,
                                }}
                                name="mobile"
                                placeholder={'手机号'}
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入手机号！',
                                    },
                                    {
                                        pattern: /^1\d{10}$/,
                                        message: '手机号格式错误！',
                                    },
                                ]}
                            />
                            <ProFormCaptcha
                                fieldProps={{
                                    size: 'large',
                                    prefix: <LockOutlined className={'prefixIcon'} />,
                                }}
                                captchaProps={{
                                    size: 'large',
                                }}
                                placeholder={'请输入验证码'}
                                captchaTextRender={(timing, count) => {
                                    if (timing) {
                                        return `${count} ${'获取验证码'}`;
                                    }
                                    return '获取验证码';
                                }}
                                name="captcha"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入验证码！',
                                    },
                                ]}
                                onGetCaptcha={async () => {
                                    message.success('获取验证码成功！验证码为：1234');
                                }}
                            />
                        </>
                    )}
                    <div
                        style={{
                            marginBottom: 24,
                        }}
                    >
                        <ProFormCheckbox noStyle name="autoLogin">
                            自动登录
                        </ProFormCheckbox>
                        <a
                            style={{
                                float: 'right',
                            }}
                        >
                            忘记密码
                        </a>
                    </div>
                </LoginForm>
            </ModalForm>
        </ThemeCoverWrapper>
    );
});