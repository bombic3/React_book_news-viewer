import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import palette from '../lib/styles/palette';
import { Link } from 'react-router-dom';

const NewsViewer = styled.div`
  display: inline-block;
  font-size: 2rem;
  padding-right: 3rem;

  p {
    margin: 0;
    padding: 0;
  }
`;

const categories = [
  {
    name: 'all',
    text: '전체보기'
  },
  {
    name: 'business',
    text: '비즈니스'
  },
  {
    name: 'entertainment',
    text: '엔터테이먼트'
  },
  {
    name: 'health',
    text: '건강'
  },
  {
    name: 'science',
    text: '과학'
  },
  {
    name: 'sports',
    text: '스포츠'
  },
  {
    name: 'technology',
    text: '기술'
  },
];

const CategoriesBlock = styled.div`
  background: ${palette.gray[9]};
  position: fixed;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0px 4px 6px rgba(0,0,0, 0.5);
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Wrapper = styled.div`
  width: 1024px;
  height: 5rem;
  margin: 0 auto; /* 중앙 정렬 */
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /* 자식 엘리먼트 사이의 여백을 최대로 설정 */
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 3px;
  }
  .right {
    display: flex;
    align-items: center;
  }

   /* 브라우저 크기에 따라 가로 크기 변경 */
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

/*
  헤더가 fixed 로 되어 있기 때문에 콘텐츠가 헤더와 안 겹치고 4rem 아래인 헤더 바로 밑에 나타나도록 해주는 컴포넌트
*/
const Spacer = styled.div`
  height: 5rem;
`;



const Category = styled(NavLink)`
  font-size: 1rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: ${palette.gray[3]};
  transition: all 0.5s;

  &:hover {
    color: ${palette.gray[9]};
    background: ${palette.gray[6]};
    border-radius: 50px;
    padding: 1rem 1.5rem;
  }

  &.active {
    font-weight: 600;
    color: ${palette.gray[0]};
    background: ${palette.gray[6]};
    border-radius: 50px;
    padding: 1rem 1.5rem;
    &:hover {
      color: ${palette.gray[9]};
    }
  }

  & + & {
    margin-left: 2rem;
  }
`;

const UpBtn = styled.button`
  position: fixed;
  bottom: 3rem;
  right: 2.5rem;
  font-size: 2rem;
  font-weight: bold;
  color: ${palette.gray[9]};
  background: ${palette.blue[3]};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    font-size: 2.25rem;
    background: ${palette.blue[5]};
    width: 52px;
    height: 52px;
  }
`;

const Categories = () => {
  const UpPage = () => { window.scrollTo(0, 0) };

  return (
    <>
    <CategoriesBlock>
        <Wrapper>
          <NewsViewer>
            <Link to='/'><p>NEWS</p><p>VIEWER</p></Link>
          </NewsViewer>
        {categories.map(c => (
          <Category
            key={c.name}
            className={({ isActive}) => (isActive ? 'active' : undefined)}
            to={c.name === 'all' ? '/' : `/${c.name}`}
          >
            {c.text}
          </Category>
        ))}
      </Wrapper>
      </CategoriesBlock>
      <Spacer />
      <UpBtn onClick={UpPage}>
        &#8963;
      </UpBtn>
    </>
  );
};

export default Categories;