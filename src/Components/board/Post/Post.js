import React, { useState } from 'react';
import './post.scss';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { Cookies } from 'react-cookie';
import axios from 'axios';

const PostContainer = styled.div`
  width: 500px;
  margin: auto;
  position: absolute;
  top: 20%;
  left: 20%;
`;

const Post = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onContentChange = (e) => {
    setContent(e.target.value);
  };
  console.log(title, content);
  const onSubmut = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post('http://localhost:8000/board/post', {
        title,
        content,
      });
      const cookies = new Cookies();
      console.log(cookies.get('accessToken'));
      //axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PostContainer>
      <Form onSubmit={onSubmut}>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label>제목</Form.Label>
          <Form.Control onChange={onTitleChange} as='textarea' rows={1} placeholder='Enter Title' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicContent'>
          <Form.Label>내용</Form.Label>
          <Form.Control o onChange={onContentChange} as='textarea' rows={5} placeholder='Enter Content' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          글쓰기
        </Button>
      </Form>
    </PostContainer>
  );
};

export default Post;
