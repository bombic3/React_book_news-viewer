import styled from 'styled-components';
import NewsItem from './NewsItem';

/*
NewsList.js : API 요청하고 뉴스 데이터가 들어 있는 배열 컴포넌트 배열로 변환하여 렌더링 해주는 컴포넌트
- 나중에 NewList 컴포넌트에서 API 요청함
- 지금은 아직 데이터 불러오지 않고 있음 sampleArticle 이라는 객체에 미리 예시 데이터 넣은 후 각 컴포넌트에 전달하여 가짜 내용이 보이게 함
*/

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};

const NewsList = () => {
  return (
    <NewsListBlock>
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
    </NewsListBlock>
  );
};

export default NewsList;