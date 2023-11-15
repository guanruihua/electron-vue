// 启动服务
export default function openServer() {
  const { runBat } = window.api || {}
  runBat()
  console.log('click', window.api)
}
