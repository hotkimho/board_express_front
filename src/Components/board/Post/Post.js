import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import qs from 'qs';
import { useParams } from 'react-router-dom';
import queryString from 'query-string';

const PostContainer = styled.div`
  width: 500px;
  margin: auto;
  position: absolute;
  top: 20%;
  left: 20%;
`;

const Post = () => {
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [content, setContent] = useState('');
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cookie = new Cookies();
        const token = cookie.get('accessToken');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const id = params.id;
        const post = await axios.get(`http://localhost:8000/board/${id}/post`);
        setTitle(() => post.data.title);
        setWriter(() => post.data.writer);
        setContent(() => post.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });
  return (
    <PostContainer>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicTitle'>
          <Form.Label>제목</Form.Label>
          <div>{title}</div>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicContent'>
          <Form.Label>작성자</Form.Label>
          <div>{writer}</div>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicContent'>
          <Form.Label>내용</Form.Label>
          <div>{content}</div>
        </Form.Group>
      </Form>
      <Button>삭제</Button>
    </PostContainer>
  );
};

export default Post;
