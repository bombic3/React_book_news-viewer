import { useState } from "react";
import axios from "../node_modules/axios/index";


function App () {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        // 기존에 사용했던 가짜 API인 JSONPlaceholder API 를 전체 뉴스 불러오는 API로 대체하기
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=432e7b719e4645c29a1fc258b7adf8d4',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  // const onClick = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
  //     setData(response.data);
  //   });
  // };
  
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
}

export default App;
