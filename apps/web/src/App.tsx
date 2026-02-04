import './App.css';
import { sum } from '@repo/utils';

function App() {
  return (
    <>
      <div>테스트</div>
      <h1>{sum(1, 2)}</h1>
    </>
  );
}

export default App;
