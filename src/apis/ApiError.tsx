export default class ApiError extends Error {
  errorData: ApiErrorData;
  static isApiError = (error: any): error is ApiError => {
    return error instanceof ApiError;
  };
  constructor(errorData: ApiErrorData) {
    super();
    this.errorData = errorData;
  }
}

type ErrorObj = {
  errorData: Pick<ApiErrorData, "userMessage" | "userTitle">;
};

export const isApiErrorObj = (error: unknown): error is ErrorObj => {
  if (
    typeof error === "object" &&
    !!error &&
    "errorData" in error &&
    typeof error.errorData === "object" &&
    !!error.errorData &&
    "code" in error.errorData &&
    typeof error.errorData.code === "number"
  ) {
    const errorData = error.errorData;
    if (
      "userMessage" in errorData &&
      typeof errorData.userMessage === "string"
    ) {
      if ("userTitle" in errorData) {
        return typeof errorData.userTitle === "string";
      }
      return true;
    }
    return false;
  }

  return false;
};

export type ApiErrorData = {
  code: number;
  userMessage: string;
  userTitle?: string;
};
