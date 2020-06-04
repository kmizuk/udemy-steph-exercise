import React from 'react';
import faker from "faker";

function CommentDetail(props) {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        kake
            </a>
                    <div className="metadata">
                        <span className="date">10/7（火）4:00PM</span>
                    </div>
                    <div className="text">goooooooood！</div>
                </div>
            </div>
        </div>
    );
}

export default CommentDetail;