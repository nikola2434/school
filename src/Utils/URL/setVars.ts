import { getVars } from "./getVars";

export const setVars = function (
  url: string,
  vars: Record<string, any> = {}
): string {
  let params = getVars(url);
  params = params ? Object.assign(params, vars) : vars;

  const urlParams = Object.entries(params)
    .map((value) => value.join("="))
    .join("&");
  try {
    const urlObj = new URL(url);
    return `${urlObj.origin}${urlObj.pathname}${
      urlParams ? `?${urlParams}` : ""
    }${urlObj.hash}`;
  } catch (error) {
    const searchIndex = url.indexOf("?");
    const hashIndex = url.indexOf("#");

    return `${
      searchIndex > 0
        ? url.substring(0, searchIndex)
        : hashIndex !== -1
        ? url.substring(0, hashIndex)
        : url
    }${urlParams ? `?${urlParams}` : ""}${
      hashIndex !== -1 ? url.substring(hashIndex) : ""
    }`;
  }
};
