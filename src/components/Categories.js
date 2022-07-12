import styled from 'styled-components';
import { css } from '../../node_modules/styled-components/dist/styled-components.cjs';
/*
### 카테고리 선택 UI 만들기
- categories 라는 배열 안에 name과 text 값이 들어가 있는 객체들을 넣어 주어서 한글로 된 카테고리와 실제 카테고리 값 연결시켜주기
- name → 실제 카테고리 값 가리킴
- text → 렌더링할 때 사용할 한글 카테고리 가리킴
*/
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
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

/*
- Categories에서 props로 전달받은 onSelect를 각 Category 컴포넌트의 onClick으로 설정
- 현재 선택된 카테고리 값에 따라 다른 스타일 적용
*/

const Category = styled.div`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25;

  &:hover {
    color: #495057;
  }

  ${props =>
  props.active && css`
    font-weight: 600;
    border-bottom: 2px solid #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  `}

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({ onSelect, category}) => {
  return (
    <CategoriesBlock>
      {categories.map(c => (
        <Category
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;