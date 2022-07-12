import { useCallback, useState } from 'react';
import Categories from './components/Categories';
import NewsList from './components/NewsList';
/*
### useState 로 카테고리 상태 관리
- App에서 category 상태 useState로 관리
- category 값 업데이트하는 onSelect 함수 생성 후
- category와 onSelect 함수 Categories 컴포넌에 props로 전달
- 또한 category 값 NewsList 컴포넌트에게도 전달
*/
const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;