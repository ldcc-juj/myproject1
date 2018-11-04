import React from 'react';
import classNames from 'classnames';
import './Button.scss';

// ...rest: 특정 값 제외한 나머지 구문, 컴포넌트에 이벤트를 설정해 줄 때 매우 용이

const Button = ({children, theme, ...rest}) => {
    return (
        <button className={classNames('Button', theme)} {...rest}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    theme: 'default',
};

export default Button;