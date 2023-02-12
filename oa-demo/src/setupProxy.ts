import {createProxyMiddleware} from "http-proxy-middleware"
// 跨域代理
export default function(app:any) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:9000",
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        "^/api": ""
      }
    })
  )
}