declare var process: {
  env: {
    NODE_ENV: "development" | "production";
  };
};

const ENV = process.env.NODE_ENV ?? "development";

const development = {
  ENV: "development",
};

const production = {
  ...development,
  ENV: "production",
};

const configs = { development, production };

const currentConfig = configs[ENV];

const config = {
  VERSION: "v22.11.11.23.17",
  ENV: currentConfig.ENV,
};

export default config;
