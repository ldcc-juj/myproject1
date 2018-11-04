import React from 'react';
import './HeaderNav.scss';
import classNames from 'classnames'; // 만족하는 조건에서만 클래스 적용!
import {
    MdHome as HomeIcon,
    MdNotifications as NotificationIcon,
    MdMail as MailIcon,
  } from 'react-icons/md';


  // 렌더링 할 컴포넌트가 유동적일 시 : React.createElement(요소, 프로퍼티, 값); ex) React.createElement('div', { className: 'hello' }, '안녕');

const HeaderNavItem = ({children, selected, tab, iconType, onSelect}) => {
    const icon = iconType ? React.createElement(iconType) : null;
    return (
        /*<div className={`HeaderNavItem ${selected === tab ? 'active' : ''}`}>*/
          <div
            className={classNames('HeaderNavItem', {
                active: selected === tab,
            })}
            onClick={() => onSelect(tab)}>
          <div className="icon">{icon}</div>
          <div className="text">{children}</div>
        </div>
    );
};

const HeaderNav = ({tab, onSelect}) => {
    return (
        <div className="HeaderNav">
            <HeaderNavItem iconType={HomeIcon} tab="home" selected={tab} onSelect={onSelect}>
                HOME
            </HeaderNavItem>
            <HeaderNavItem iconType={NotificationIcon} tab="notification" selected={tab} onSelect={onSelect}>
                NOTICE
            </HeaderNavItem>
            <HeaderNavItem iconType={MailIcon} tab="message" selected={tab} onSelect={onSelect}>
                MAIL
            </HeaderNavItem>
        </div>
    );
};

export default HeaderNav;