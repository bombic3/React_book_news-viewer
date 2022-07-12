import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import NewsItem from './NewsItem';

/*
NewsList.js : API 요청하고 뉴스 데이터가 들어 있는 배열 컴포넌트 배열로 변환하여 렌더링 해주는 컴포넌트
- 나중에 NewList 컴포넌트에서 API 요청함
- 지금은 아직 데이터 불러오지 않고 있음 sampleArticle 이라는 객체에 미리 예시 데이터 넣은 후 각 컴포넌트에 전달하여 가짜 내용이 보이게 함
*/
/*
## 데이터 연동하기
- useEffect 를 사용하여 컴포넌트가 처음 렌더링되는 시점에 API 요청
    - 주의할 점 : useEffect에 등록하는 함수에 async를 붙이면 안 됨
        
        → useEffect에서 반환해야 하는 값은 뒷정리 함수!
        
        → useEffect 내부에서 async/await를 사용하고 싶다면, 함수 내부에 async 키워드가 붙은 또 다른 함수를 만들어서 사용해 줘야함
        
- loading 상태관리
    - API 요청이 대기중인지 판별
    - 대기 중 - loading: true
    - 요청 끝 - loading: false
- 데이터 불러와서 뉴스 데이터 배열을 map 함수 사용하여 컴포넌트 배열로 변환할 때 신경써야 할 부분
    - map 함수 사용 전에 꼭 !articles 조회하여 해당 값이 현재 null이 아닌지 검사
        
        → 아직 데이터가 없을 때 null에는 map 함수가 없기 때문에 렌더링 과정에서 오류 생김
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


/*
const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};
*/

const NewsList = () => {
  // useState, useEffect 사용
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=432e7b719e4645c29a1fc258b7adf8d4',
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 대기 중일 때
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }
  // 아직 articles 값이 설정되지 않았을 때
  if (!articles) {
    return null;
  }

  // articles 값이 유효할 때
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;