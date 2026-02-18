'use client';
import { Button } from '@repo/ui';

export default function Home() {
  return (
    <div className="flex  flex-col min-h-screen gap-3 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button text="테스트" onClick={() => alert('테스트')} />
      <p>API 주소: {process.env.NEXT_PUBLIC_API_URL}</p>
      <h1>github actions 배포 테스트</h1>
      <h1>PR 승인 테스트</h1>
      <h2>PR 시 빌드,테스트 액션 추가 테스트3</h2>
    </div>
  );
}
