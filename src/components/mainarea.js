import React, { useState, useEffect, useRef } from 'react';
import { Letter } from 'react-letter';
import defaultmails from '../utils/defaultmails';

const MainArea = ({ state }) => {
    const [cur_id, setID] = useState("");
    const [cur_mail, setMail] = useState(null);
    useEffect(() => {
        if (cur_id !== "")
            setMail(defaultmails.find(mail => mail.id === cur_id));
        else
            setMail(null);
    }, [cur_id]);
    if (state === 0) {
        return (
            <div className="row flex-grow-1 overflow-hidden">
                <div className='col-4 bg-light mh-100 overflow-auto py-2 left-panel'>
                    <MailList mails={defaultmails} onMailClick={(id) => { setID(id); }} />
                </div>
                <div className='col-8 bg-light mh-100 overflow-auto py-2 right-panel'>
                    <LetterBox mail={cur_mail} />
                </div>
            </div>
        );
    }
    else if (state === 1) {
        return (
            <div className='container-fluid flex-grow-1'></div >
        );
    }
    else if (state === 2) {
        return (
            <div className='container-fluid flex-grow-1'></div >
        );
    }
    else if (state === 3) {
        return (
            <div className='container-fluid flex-grow-1'>
                <div className="row d-flex justify-content-between align-items-center">
                    <Settings />
                </div>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => { }}
                >
                    确定
                </button>
            </div>


        );
    }

}

const LetterBox = ({ mail }) => {
    if (mail !== null) {
        return (
            <div className='container-fluid'>
                <ul
                    className='list-group list-group-flush letter-list'
                >
                    <li
                        className='list-group-item bg-light d-flex align-items-center letter-item'
                        key={mail.id}
                    >
                        <div className='row flex-grow-1 overflow-hidden'>
                            <h6 className='text-muted divelp1'><small>{mail.from}</small></h6>
                            <h6 className='divelp1'>{mail.subject}</h6>
                            <h6 className='text-muted divelp1'><small>{mail.date}</small></h6>
                        </div>
                    </li>
                </ul>
                <Letter html={mail.html} text={mail.text} />;
            </div >
        );
    }
    else {
        return (
            <div className='container-fluid'></div >
        );
    }
}

const MailList = ({ mails, onMailClick }) => {
    return (
        <ul className='list-group list-group-flush mail-list'>
            {
                mails.map(mail => (
                    <li
                        className='list-group-item bg-light d-flex align-items-center mail-item'
                        key={mail.id}
                        onClick={() => { onMailClick(mail.id) }}
                    >
                        <div className='row flex-grow-1 overflow-hidden'>
                            <h6 className='text-muted divelp'><small>{mail.from}</small></h6>
                            <h6 className='divelp'>{mail.subject}</h6>
                            <h6 className='text-muted divelp'><small>{mail.date}</small></h6>
                        </div>

                    </li>
                ))
            }
        </ul>
    )
};

const Settings = () => {
    return (
        <>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">邮件服务器地址</span>
                </div>
                <input type="text" className="form-control" placeholder="pop.example.com" aria-label="host" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">端口号</span>
                </div>
                <input type="text" className="form-control" placeholder="995" aria-label="port" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">密码</span>
                </div>
                <input type="text" className="form-control" placeholder="" aria-label="pass" aria-describedby="basic-addon1" />
            </div>
        </>
    );
}

export default MainArea;