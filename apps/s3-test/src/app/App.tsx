import { Button, Input } from '@repo/ui'

function App() {
  return (
    <>
      <h1 className="p-test-md bg-gray-900">Vite + React</h1>
      <div className="card">
        <Button text="react/vite 버튼" onClick={() => alert('테스트')} />
        <Button
          text="github actions"
          onClick={() => alert('github actions!')}
        />
      </div>
      <p className="read-the-docs">s3 배포 승인 테스트 -2</p>
      <p className="read-the-docs">PR 빌드 워크플로우 테스트 - 3</p>
      <p className="read-the-docs">cloudfront 도메인,인증서 등록 테스트</p>
      <Input label="테스트 lg 라벨" inputSize="lg" />
      <Input label="테스트 sm 라벨" inputSize="sm" />
    </>
  )
}

export default App
