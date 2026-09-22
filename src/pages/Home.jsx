import { useState } from 'react';
import Counter from '../components/Counter';

export default function Home() {
  const [pingResult, setPingResult] = useState('');

  const handlePing = async () => {
    const res = await window.versions.ping();
    setPingResult(res);
  };

  return (
    <div className="page">
      <h1>Hello from Electron + React!</h1>
      <p>本应用正在使用 Chrome (v{window.versions.chrome()}), Node.js (v{window.versions.node()}), 和 Electron (v{window.versions.electron()})</p>

      <button onClick={handlePing}>测试 IPC (ping)</button>
      {pingResult && <p>IPC 返回：<strong>{pingResult}</strong></p>}

      <Counter />
    </div>
  );
}
