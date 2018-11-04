import React, { Component } from 'react';
import './PostCardList.scss';
import PostCard from '../PostCard';

class PostCardList extends Component {
    timerId = null;

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.posts !== this.props.posts;
    } // 업데이트 최적화

    componentDidMount(){
        this.timerId = setInterval (() => {
            this.forceUpdate(); // 강제 렌더링
        }, 60 * 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    } // 타이머를 설정했다면, 컴포넌트가 언마운트 되는 시점엔 꼭 clearInterval or clearTimeOut 을 통하여 제거

    render () {
        const {posts, onRemove} = this.props; // JSX에서 javascript 값 읽을 때 {}!!!!
        
        // 객체를 통째로 전달해주었을떄의 장점: shouldComponentUpdate(최적화) 구현 시 매우 편리
        const postlist = posts.map(post => <PostCard key={post.id} post={post} onRemove={onRemove} />);
        // 따라서 postlist는 그냥 jsx내 변수이므로 {} 안 침!
        return (
            <div className="PostCardList">
                {postlist}
            </div>
        );
    }
}

export default PostCardList;