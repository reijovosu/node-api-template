process.env.LOG_LEVEL = "fatal";
module.exports = {
  require: [
    "ts-node/register/transpile-only"
  ],
  recursive: true,
  reporter: "dot",
  spec: [
    "test/**/*.spec.ts"
  ]
};
