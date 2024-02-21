const varsRegex = /[?&]+([^=&]+)=([^&]*)/gi;

export const getVars = (url: string = location.href) => {
  const vars: Record<string, string> = {};
  url.replace(varsRegex, function (m, key, value) {
    vars[key] = value;
    return m;
  });

  return vars;
};
