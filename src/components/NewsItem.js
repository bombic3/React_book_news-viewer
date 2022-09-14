import styled from 'styled-components';

/*
- NewsItem.js : 각 뉴스 정보를 보여 주는 컴포넌트
    - article 이라는 객체는 props로 통째로 받아 와서 사용
    - 뉴스 데이터 어떤 필드 있는지 확인(필드 리액트에 넣기 위해)
        - title : 제목
        - description : 내용
        - url : 링크
        - urlToImage : 뉴스 이미지
*/

const NewsItemBlock = styled.div`
  display: flex;
  box-shadow: 1px 5px 3px 2px rgba(0,0,0, 0.3);
  border-radius: 20px;
  padding: 2rem;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 280px;
      height: 180px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: #000;
      }
    }
    p {
      margin: 0;
      line-height: 1.5rem;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className='thumbnail'>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className='contents'>
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{ description }</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;