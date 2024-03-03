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
  errorData: Pick<ApiErrorData, "errorMsg" | "errorTitle">;
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
    if ("errorMsg" in errorData && typeof errorData.errorMsg === "string") {
      if ("errorTitle" in errorData) {
        return typeof errorData.errorTitle === "string";
      }
      return true;
    }
    return false;
  }

  return false;
};

export type ApiErrorData = {
  code: number;
  errorMsg: string;
  errorTitle?: string;
};
