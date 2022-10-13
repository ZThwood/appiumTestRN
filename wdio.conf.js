exports.config = {
  port: 4723,
  services: [['appium', {command: 'appium'}]],
  runner: 'local',
  specs: ['./test/specs/**/*.js'], // 测试目录
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: '',
      appiumVersion: '1.22.3', // appium -v 获取
      platformName: 'Android',
      platformVersion: '9', // 安卓版本
      deviceName: 'Nexus_S_API_28', // 设备名称 执行adb -s emulator-5554 emu avd name 获取
      app: './android/app/build/outputs/apk/debug/app-debug.apk', // apk目录， 没有的话先在Android studio build一个
      automationName: 'UiAutomator2',
    },
  ],
  logLevel: 'trace',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters: ['dot'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};
