import React, { Component } from 'react';
import './NoticeCard.scss';
import koLocale from 'date-fns/locale/ko';
import differenceInDays from 'date-fns/difference_in_days';
import distanceInWords from 'date-fns/distance_in_words';
import format from 'date-fns/format';
import { MdInfo as InfoIcon } from 'react-icons/md';

class NoticeCard extends Component {
    get formattedDate(){
        const now = new Date();
        const date = new Date(this.props.post.date);

        if(now - date < 60 * 1000){
            return 'now';
        }
        else if (differenceInDays(now, date) < 10){
            return distanceInWords(now, date, {locale: koLocale, addSuffix: true});
        }
        else{
            return format(date, 'YYYY-MM-DD');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        this.prev = this.formattedDate;
    }

    componentDidMount() {
        this.prev = this.formattedDate;
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            this.props.post !== nextProps.post || this.formattedDate !== this.prev
        ); // 게시물이 바뀌거나 prev값과 formattedDate 값이 다를 경우에만 업데이트하겠다
    }

    render() {
        const { post: {text} } = this.props;

        return (
            <div className="NoticeCard">
                <div className="info"><InfoIcon /></div>
                <div className="date">{this.formattedDate}</div>
                <div className="text">{text}</div>
            </div>
        );
    }
}

export default NoticeCard;