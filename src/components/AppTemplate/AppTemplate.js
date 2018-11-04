import React from 'react';
import './AppTemplate.scss';

const AppTemplate = ({header, children}) => {
    return (
        <div className="AppTemplate">
            {header}
            <main>{children}</main>
        </div>
    );
};

export default AppTemplate;


// class / const 차이(나름대로 생각..): class 는 render()를 호출하고 싶을 때! const는 정적인 포맷 or 공통 형식?을 리턴하고 class가 이를 render() 내에서 사용