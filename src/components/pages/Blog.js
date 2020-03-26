import React, { Fragment } from 'react';
import {BLOGINFO} from '../../shared/blogInfo';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

const Blog = () => {
  const blogList = BLOGINFO.map(blog => (
    <Card>
      <div className="card-header bg-primary">
        <h2 className='text-center text-light'>{blog.name}</h2>
      </div>
      <CardImg className="card-img-top img-fluid blog-images" src={blog.image} alt='blog.name' />
      <CardBody>
        <CardTitle>{blog.title}</CardTitle>
        <CardText>{blog.text}</CardText>
        <a class="btn btn-primary btn-block" href="#!">Read More</a>
      </CardBody>
    </Card>
  ));

  return (
    <Fragment>
      <div class='container my-5'>
        <h1 class='text-center p-5 display-2 text-dark'>Blog</h1>
      </div>
      {blogList}
    </Fragment>
  );
};

export default Blog;
