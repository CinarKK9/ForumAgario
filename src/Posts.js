// @flow 
import * as React from 'react';

export const Posts = ({ posts, title }) => {
    return (
        <div className="posts">
            <div className='d-flex justify-content-between align-items-center uwuwuwu'>
                <h2 className='page-title'>{title}</h2>
                <div className="input-group w-25 search">
                    <input type="search" className="form-control" placeholder="Search Something" name='q' />
                    <button className="btn" type="button">Search</button>
                </div>
            </div>
            {
                posts.map((post) => (
                    <div className="post-preview card" key={post.id}>
                        <div className="card-body">
                            <span className="card-title">{post.title}</span>
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