import React, { Component } from 'react';
import './MailForm.scss';
import koLocale from 'date-fns/locale/ko';
import differenceInDays from 'date-fns/difference_in_days';
import distanceInWords from 'date-fns/distance_in_words';
import format from 'date-fns/format';
import Button from '../Button';
import { MdSend as SendIcon,
    MdSupervisorAccount as TargetIcon,
    MdCallMade as MyEmail
} from 'react-icons/md';

 class MailForm extends Component {

    handleChange = (e) => {
        const {myemail, onTodoChange} = this.props;

        onTodoChange(e.target.value);
    }

    render() {
        const {myemail} = this.props;

        const now = new Date();

        const curTime = format(now, 'YYYY-MM-DD HH:MM:SS');

        return (
            <div className="MailForm">
                <div className="receiveEmail">
                    <label><TargetIcon />Recipient</label>
                    <input type="text" id="recipient"/>
                </div>
                <div className="sendEmail">
                    <label><TargetIcon />Recipient</label>
                    <input type="text" id="sender" value={myemail} onChange={this.handleChange}/>
                </div>
                <div className="curDate">{curTime}</div>
                <div className="textArea">
                    <textarea className="content" rows="50"/>
                </div>
                <div className="buttonArea">
                    <Button><SendIcon />SEND</Button>
                </div>
            </div>
        );
    }
 }

 export default MailForm;