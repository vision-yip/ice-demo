import { runApp, IAppConfig } from 'ice';
import Route from './routes'

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
    // 是否开启 ErrorBoundary，默认为 false
    errorBoundary: true,
    // 自定义错误边界的 fallback UI
    ErrorBoundaryFallback: () => <div>渲染错误</div>,
    // 自定义错误的处理事件
    onErrorBoundaryHander: (error: Error, componentStack: string) => {
      // Do something with the error
    },
  },
  router: {
    type: 'hash',
    routes: Route
  },
};

runApp(appConfig);
