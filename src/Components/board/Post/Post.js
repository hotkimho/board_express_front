import React, { useState } from 'react';
import './post.scss';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';

const PostContainer = styled.div`
  width: 500px;
  margin: auto;
  position: absolute;
  top: 20%;
  left: 20%;
`;

const Post = () => {
  return (
    <PostContainer>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label>제목</Form.Label>
          <Form.Control as='textarea' rows={1} placeholder='Enter Title' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label>내용</Form.Label>
          <Form.Control as='textarea' rows={5} placeholder='Enter Title' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          글쓰기
        </Button>
      </Form>
    </PostContainer>
  );
};

export default Post;
