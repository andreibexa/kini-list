declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_V3_URL: string;
      REACT_APP_API_V4_URL: string;
      REACT_APP_API_KEY: string;
      REACT_APP_ACCESS_TOKEN: string;
    }
  }
}

export {};
