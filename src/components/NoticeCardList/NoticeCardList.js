import React, { Component } from 'react';
import './NoticeCardList.scss';
import NoticeCard from '../NoticeCard';

class NoticeCardList extends Component {
    render () {
        const {notices} = this.props; // JSX에서 javascript 값 읽을 때 {}!!!!
        
        // 객체를 통째로 전달해주었을떄의 장점: shouldComponentUpdate(최적화) 구현 시 매우 편리
        const postlist = notices.map(notice => <NoticeCard key={notice.id} post={notice} />);
        // 따라서 postlist는 그냥 jsx내 변수이므로 {} 안 침!
        return (
            <div className="NoticeCardList">
                {postlist}
            </div>
        );
    }
}

export default NoticeCardList;