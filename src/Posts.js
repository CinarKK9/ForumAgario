// @flow 
import * as React from 'react';

export const Posts = ({posts, title}) => {
    return (
        <div className="posts"> 
            <h2 className='page-title ms-4 my-3'>{ title }</h2>
        {
            posts.map((post) => (
                <div className="post-preview card" key={post.id}>
                    <div className="card-body">
                        <span className="card-title" style={{marginBottom: 10 + 'rem'}}>{post.title}</span>
                        <p className="preview card-text">{post.preview}</p>
                        <div className="info mt-4 align-items-center">
                            <span>- {post.author}</span>
                            <div className='statistics justify-content-between'>
                                <div className='d-flex justify-content-between align-items-center gap-1'>
                                    <div className='likes m-0'>
                                    </div>
                                    <span className='text-center'>{post.likes}</span>
                                </div>
                                <div className='d-flex justify-content-between align-items-center gap-1'>
                                    <div className="comments m-0" />
                                    <span className='text-center'>{post.comments}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        ))
        }
        </div>
    );
};