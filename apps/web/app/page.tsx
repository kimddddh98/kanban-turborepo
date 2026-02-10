'use client';
import { Button } from '@repo/ui';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button text="테스트" onClick={() => alert('테스트')} />
      <p>API 주소: {process.env.NEXT_PUBLIC_API_URL}</p>
    </div>
  );
}
