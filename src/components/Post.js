import StyledPost, {
  PostFooter,
  PostBody,
  PostHeader,
} from './styled/Post.styled';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { readingTime } from '../helpers/Utils';

const Post = ({ post }) => {
  /*   const truncate = (source, size) => {
    return source.length > size ? source.slice(0, size - 1) + '…' : source;
  }; */

  return (
    <StyledPost>
      <Link to={`/post/${post.id}`}>
        <PostHeader>
          <img src={post.img} alt="Profile Img" />
          <h4>{post.username}</h4>
        </PostHeader>

        <PostBody>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </PostBody>

        <PostFooter>
          <span>{post.created_at}</span>
          <span>·</span>
          <span>{readingTime(post.body)}</span>
        </PostFooter>
      </Link>
    </StyledPost>
  );
};

export default memo(Post);
