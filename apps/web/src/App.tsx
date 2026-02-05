import { Button, Task } from '@repo/ui';
import './App.css';
import { sum } from '@repo/utils';
function App() {
  return (
    <>
      <div>테스트12</div>
      <h1>{sum(1, 2)}</h1>
      <Button onClick={() => {}} text="55"></Button>
      <Task
        onArchiveTask={() => {}}
        onPinTask={() => {}}
        task={{
          id: 1,
          title: '테스트',
          state: true,
        }}
      />
    </>
  );
}

export default App;
