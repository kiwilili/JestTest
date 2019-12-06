// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // All imported modules in your tests should be mocked automatically
  // 自动模拟在测试用例中的所有导入模块，在 __mocks__ 文件夹中寻找
  // automock: false,

  // Stop running tests after `n` failures
  // 默认情况下，Jest运行所有测试并在完成后将所有错误生成到控制台，bil 让 jest 在 n 失败后停止运行测试
  // bail: 0,

  // Respect "browser" field in package.json when resolving modules
  // false => browser | true => node
  // browser: false,

  // The directory where Jest should store its cached dependency information
  // 存放 jest 依赖信息缓存的目录
  // cacheDirectory: "C:\\Users\\Administrator\\AppData\\Local\\Temp\\jest",

  // Automatically clear mock calls and instances between every test
  // 自动清除模拟调用和实例在每次测试之间
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  // 是否收集测试时的覆盖率信息，因为要带上覆盖率搜集语句访问所有执行过的文件，这可能会让测试执行速度明显减慢
  // collectCoverage: false,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // 指示应收集覆盖率信息的全局模式一组文件，即使文件不存在测试，也将为其收集覆盖率信息，并且测试套件中不需要它
  // collectCoverageFrom: null,

  // The directory where Jest should output its coverage files
  // jest 输出测速覆盖率文件的目录
  // 运行 npx jest --coverage
  coverageDirectory: "coverage",

  // An array of regexp pattern strings used to skip coverage collection
  // 忽略测试的文件路径的正则匹配
  // coveragePathIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],

  // A list of reporter names that Jest uses when writing coverage reports
  // coverageReporters: [
  //   "json",
  //   "text",
  //   "lcov",
  //   "clover"
  // ],

  // An object that configures minimum threshold enforcement for coverage results
  // coverageThreshold: null,

  // A path to a custom dependency extractor
  // dependencyExtractor: null,

  // Make calling deprecated APIs throw helpful error messages
  // errorOnDeprecated: false,

  // Force coverage collection from ignored files using an array of glob patterns
  // forceCoverageMatch: [],

  // A path to a module which exports an async function that is triggered once before all test suites
  // globalSetup: null,

  // A path to a module which exports an async function that is triggered once after all test suites
  // globalTeardown: null,

  // A set of global variables that need to be available in all test environments
  // globals: {},

  // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
  // maxWorkers: "50%",

  // An array of directory names to be searched recursively up from the requiring module's location
  // moduleDirectories: [
  //   "node_modules"
  // ],

  // An array of file extensions your modules use
  // 模块使用文件扩展名数组，当你导入的文件没有扩展名的时候，它会在这个数组里面去自动匹配
  // moduleFileExtensions: [
  //   "js",
  //   "json",
  //   "jsx",
  //   "ts",
  //   "tsx",
  //   "node"
  // ],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  // 模块名映射，类 webpack alias 以及 jsconfig.js 的 compilerOptions.paths
  // moduleNameMapper: {},

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  // modulePathIgnorePatterns: [],

  // Activates notifications for test results
  // notify: false,

  // An enum that specifies notification mode. Requires { notify: true }
  // notifyMode: "failure-change",

  // A preset that is used as a base for Jest's configuration
  // preset: null,

  // Run tests from one or more projects
  // projects: null,

  // Use this configuration option to add custom reporters to Jest
  // reporters: undefined,

  // Automatically reset mock state between every test
  // resetMocks: false,

  // Reset the module registry before running each individual test
  // resetModules: false,

  // A path to a custom resolver
  // resolver: null,

  // Automatically restore mock state between every test
  // restoreMocks: false,

  // The root directory that Jest should scan for tests and modules within
  // rootDir: null,

  // A list of paths to directories that Jest should use to search for files in
  // roots: [
  //   "<rootDir>"
  // ],

  // Allows you to use a custom runner instead of Jest's default test runner
  // runner: "jest-runner",

  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: [],

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  // 运行做测试的时候使用某些垫片为运行环境做兼容
  // setupFilesAfterEnv: [],

  // A list of paths to snapshot serializer modules Jest should use for snapshot testing
  // 快照格式化
  // snapshotSerializers: [],

  // The test environment that will be used for testing
  // testEnvironment: "jest-environment-jsdom",

  // Options that will be passed to the testEnvironment
  // testEnvironmentOptions: {},

  // Adds a location field to test results
  // testLocationInResults: false,

  // The glob patterns Jest uses to detect test files
  // 匹配测试文件
  // testMatch: [
  //   "**/__tests__/**/*.[jt]s?(x)",
  //   "**/?(*.)+(spec|test).[tj]s?(x)"
  // ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // testPathIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  // testRegex: [],

  // This option allows the use of a custom results processor
  // testResultsProcessor: null,

  // This option allows use of a custom test runner
  // testRunner: "jasmine2",

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  // 模拟浏览器的地址
  // testURL: "http://localhost",

  // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
  // timers: "real",

  // A map from regular expressions to paths to transformers
  // 不同文件类型对应不同的转换器
  // transform: null,

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   "\\\\node_modules\\\\"
  // ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  // verbose: null,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
};