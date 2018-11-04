import React, { Component } from 'react';
import {MdClose as CloseIcon} from 'react-icons/md';
import './WriteBox.scss';
import Button from '../Button';

class WriteBox extends Component {
    state = {
        value: '',
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    handleWrite = () => {
        this.props.onWrite(this.state.value);
    };

    render(){
        const {onClose} = this.props;
        const {value} = this.state;

        return (
            <div className="WriteBox">
                <div className="dark" onClick={onClose}/>
                <div className="modal">
                    <div className="head">
                        <h3>NEW POST</h3>
                        <div className="exit" onClick={onClose}>
                            <CloseIcon />
                        </div>
                    </div>
                    <textarea value={value} onChange={this.handleChange} rows={4} placeholder="What are you thinking about?"/>
                    <div className="right">
                        <Button theme="outline" onClick={this.handleWrite}>COMPLETE</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default WriteBox;