export default function About() {
  return (
    <div className="page">
      <h1>关于</h1>
      <p>这是一个使用 Electron Forge + webpack 模板 + React 全家桶构建的应用。</p>
      <ul>
        <li>React 18（createRoot 并发渲染）</li>
        <li>React Router（HashRouter，适配 Electron file:// 环境）</li>
        <li>Redux Toolkit（全局状态管理）</li>
      </ul>
    </div>
  );
}
