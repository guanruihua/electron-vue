import { contextBridge, app } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { exec, spawn } from 'child_process'
import path from 'path'

const isDev = process.env.NODE_ENV === 'development'

// 启动服务
export default function runBat() {
  // console.log({ dialog })

  const cwd = isDev
    ? path.resolve(__dirname, '../../resources/test/')
    : path.resolve(app.getAppPath(), '../test/')

  exec(
    'helloworld.bat',
    {
      cwd
    },
    // eslint-disable-next-line
    (error, stdout, stderr) => {
      if (error) {
        console.error(`执行的错误: ${JSON.stringify(error, null, 2)}`)
        return
      }
      console.log('run success')
    }
  )
}

// Custom APIs for renderer
const api = {
  exec,
  spawn,
  runBat
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
