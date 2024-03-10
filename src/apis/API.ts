import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosInstance,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";
import ApiError from "./ApiError";
import { TokenStorage } from "@storage";
const qs = require("qs");

class APIClass implements APIInstance {
  private headers: Record<string, any> = {};
  private instance: AxiosInstance | null = null;
  private useConsole = false;

  constructor() {
    if (process?.env?.NODE_ENV === "development") {
      this.useConsole = true;
    }
  }

  private requestInterceptor(
    config: InternalAxiosRequestConfig<any>
  ): InternalAxiosRequestConfig<any> {
    return {
      ...config,
      ...(this.useConsole ? { requestAt: new Date() } : {}),
      headers: {
        ...config.headers,
        ...this.headers,
      } as AxiosRequestHeaders,
    };
  }

  private hasCustomConfig(
    config: any
  ): config is AxiosRequestConfig<any> & APICustomConfig {
    return "requestAt" in config && config.requestAt instanceof Date;
  }

  private responseInterceptor = {
    onFulfilled: <T>({ config, data, headers }: AxiosResponse<T>) => {
      if (this.useConsole && this.hasCustomConfig(config)) {
        const timeDiffInSec = (
          (new Date().getTime() - config.requestAt.getTime()) /
          1000
        ).toFixed(2);

        let logText = `[${config.method?.toUpperCase()}] ${config.url}`;

        config.params && (logText += `\t${JSON.stringify(config.params)}`);

        logText += `\t${timeDiffInSec}s`;

        console.log(logText);
      }

      return data;
    },
    onRejected: ({ response }: FailResponse) => {
      return Promise.reject(
        new ApiError({
          userTitle: response?.data?.userTitle,
          userMessage: response?.data?.userMessage || "오류가 발생 했습니다",

          code: response?.data?.code ?? 0,
        })
      );
    },
  };

  public initInstance(config?: CreateAxiosDefaults) {
    this.instance = axios.create({
      ...config,
      paramsSerializer: (p) => qs.stringify(p, { indices: false }),
    });

    this.instance.interceptors.request.use(this.requestInterceptor.bind(this));

    this.instance.interceptors.response.use(
      this.responseInterceptor.onFulfilled.bind(this),
      this.responseInterceptor.onRejected.bind(this)
    );
  }

  public setHeaders(headers: Record<string, any>) {
    this.headers = { ...this.headers, ...headers };
  }

  public setHeaderToken(token: string) {
    this.headers["X-Authorization"] = token;
    TokenStorage.set({ token });
  }

  public getHeaderToken() {
    return this.headers["X-Authorization"] || null;
  }

  public removeHeaderToken() {
    delete this.headers["X-Authorization"];
  }

  public setVersion(version: string) {
    this.headers["App-Version"] = version;
  }

  public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    if (!this.instance) throw new Error("init instance before use");
    return this.instance.get(url, config);
  }

  public delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    if (!this.instance) throw new Error("init instance before use");
    return this.instance.delete(url, config);
  }

  public post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    if (!this.instance) throw new Error("init instance before use");
    return this.instance.post(url, data, config);
  }

  public put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    if (!this.instance) throw new Error("init instance before use");
    return this.instance.put(url, data, config);
  }

  public patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    if (!this.instance) throw new Error("init instance before use");
    return this.instance.patch(url, data, config);
  }
}

type FailResponse = {
  message?: string;
  response: AxiosResponse;
  config: AxiosRequestConfig;
};

type APICustomConfig = {
  requestAt: Date;
};

export interface APIInstance {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;

  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;

  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;

  put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;

  patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

export default new APIClass();
