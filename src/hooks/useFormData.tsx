import { useState, useCallback } from "react";

export interface FormDataItem {
  [key: string]: string | Blob;
}

type ApiResponse = any;

const useFormData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const sendRequest = useCallback(async (url: string, data: FormDataItem) => {
    setIsLoading(true);

    return new Promise<ApiResponse>((resolve, reject) => {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader(
          "Content-Type",
          "application/x-www-form-urlencoded"
        );
        const formData = new FormData();

        // Add data to FormData
        for (const key in data) {
          formData.append(key, data[key]);
        }
        const dataString = new URLSearchParams(
          formData as unknown as URLSearchParams
        ).toString();

        xhr.onload = () => {
          const response = JSON.parse(xhr.responseText) as ApiResponse;
          if (xhr.status === 200) {
            resolve(response);
          } else {
            const detail = response.detail[0].msg
            setError(detail);
            reject(new Error(detail));
          }
        };
        xhr.send(dataString);
      } catch (error) {
        console.error("Form submission error: ", error);
        reject(error);
      } finally {
        setIsLoading(false);
      }
    });
  }, []);

  const clearError: () => void = () => {
    setError(undefined);
  };

  return { sendRequest, isLoading, error, clearError };
};

export default useFormData;
