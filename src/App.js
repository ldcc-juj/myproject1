import React, { Component } from 'react';
import AppTemplate from './components/AppTemplate';
import Header from './components/Header';
import HeaderNav from './components/HeaderNav/HeaderNav';
import Button from './components/Button';
import WriteBox from './components/WriteBox';
import PostCardList from './components/PostCardList';
import NoticeCardList from './components/NoticeCardList';
import MailForm from './components/MailForm';

class App extends Component {
  id = 0; // 게시물의 고유 아이디 값을 증가시키기 위해서
  noticeId = 0;

  state = {
    tab: 'home', // header
    writeBox: false, // modal
    posts: [], // posts
    notices: [], // notices
    myemail: 'newjeong@gmail.com',
  };

  onTodoChange(value){
    console.log(value);

      this.setState({
        myemail: value,
      }); // Error!
  }

  /* header 관련 업데이트 함수 */
  handleSelectTab = tab => {
    this.setState({tab});
  };

  /* modal 관련 업데이트 함수 */
  handleToggleWriteBox = () => {
    this.setState({
      writeBox: !this.state.writeBox, // 상태는 무조건 새로 할당해야 함
    });
  };

  handleWrite = (text) => {
    console.log(text);

    this.setState({
      posts: [
        {
          id: ++this.id,
          text,
          date: new Date(),
        },
        ...this.state.posts,
      ],
      writeBox: false,
    });
  };

  /* postcard 관련 업데이트 함수 */
  handleRemove = (id) => {
    this.setState({
      posts: this.state.posts.filter(post => post.id !== id)
    });
  };

  /* notice 관련 업데이트 함수 */
  handleNotice = (text) => {
    console.log(text);

    this.setState({
      notices: [
        {
          id: ++this.noticeId,
          text,
          date: new Date(),
        },
        ...this.state.notices,
      ],
      writeBox: false,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if(this.state.posts!==prevState.posts){
      localStorage.setItem('posts', JSON.stringify(this.state.posts));
    }

    if(this.state.notices!==prevState.notices){
      localStorage.setItem('notices', JSON.stringify(this.state.notices));
    }
  } // 업데이트 때마다 JSON으로 게시물을 로컬저장소에 저장

  componentDidMount(){
    const posts = localStorage.getItem('posts');
    const notices = localStorage.getItem('notices');

    if(posts){
      const parsed = JSON.parse(posts);

      this.setState({
        posts: parsed,
      });

      this.id=parsed[0] ? parsed[0].id:0; // 게시물 배열의 첫번째 원소가 가장 최근 거!
    }

    if(notices){
      const parsedNotice = JSON.parse(notices);

      this.setState({
        notices: parsedNotice,
      });

      this.noticeId=parsedNotice[0] ? parsedNotice[0].id:0;
    }
  } // 브라우저 뜰 시 로컬저장소에 있는 게시물 정보 불러옴

  render() {
    const {tab, writeBox, posts, notices, myemail} = this.state; // 비구조화 할당, 상태의 변수를 불러와야 렌더링 함수 내에서 사용 가능!!!
    return (
      <AppTemplate 
        header={
          <Header 
            left={<HeaderNav tab={tab} onSelect={this.handleSelectTab}/>}
            right={(tab === 'home' && <Button onClick={this.handleToggleWriteBox}>NEW POST</Button>) || (tab === 'notification' && <Button onClick={this.handleToggleWriteBox}>NEW NOTICES</Button>)}
          />
        }
      >
        {writeBox && <WriteBox onClose={this.handleToggleWriteBox} onWrite={(tab === 'home' && this.handleWrite) || (tab === 'notification' && this.handleNotice)}/>}
        {tab === 'home' && <PostCardList posts={posts} onRemove={this.handleRemove}/>}
        {tab === 'notification' && <NoticeCardList notices={notices}/>}
        {tab === 'message' && <MailForm myemail={myemail} onTodoChange={this.onTodoChange}/>}
      </AppTemplate>
    );
  }
}

export default App;