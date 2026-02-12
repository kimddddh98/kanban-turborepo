import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button } from '@repo/ui';

function App() {
  const a =
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button text="react/vite 버튼" onClick={() => alert('테스트')} />
        <Button
          text="github actions"
          onClick={() => alert('github actions!')}
        />
      </div>
      <p className="read-the-docs">s3 배포 승인 테스트 -2</p>
      <p className="read-the-docs">PR 빌드 워크플로우 테스트 - 2</p>
    </>
  );
}

export default App;
