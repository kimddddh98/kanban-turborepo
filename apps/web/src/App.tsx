import { Button } from '@repo/ui';
import './App.css';
import { sum } from '@repo/utils';
function App() {
  return (
    <>
      <div>테스트12</div>
      <h1>{sum(1, 2)}</h1>
      <Button text="55"></Button>
    </>
  );
}

export default App;
