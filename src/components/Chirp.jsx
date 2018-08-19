import React from 'react';

const Chirp = (props) => {
    return props.chatLog.map((e, idx) => {
        let date = new Date(e.time).toLocaleDateString();
        let time = new Date(e.time).toTimeString().split(' ')[0];
        if (e.from === 'user') {
            return (
                <p key={idx} className="alert alert-success">
                    {e.text} <span className="date">{`${date} ${time}`}</span>
                </p>
            );
        } else {
            return (
                <p key={idx} className="alert alert-primary">
                    <span className="date">{`${date} ${time}`}</span> {e.text}
                </p>
            );
        }
    });
};

export default Chirp;
