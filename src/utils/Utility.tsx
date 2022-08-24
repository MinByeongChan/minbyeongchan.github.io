type IQueryString = {
  [key: string]: string;
};

// Date 변환
export const getDateFormat = (value: string): string => {
  const d = new Date(value);
  let year = String(d.getFullYear());
  let month = String(d.getMonth() + 1);
  if (month.length < 2) {
    month = '0' + month;
  }

  let day = String(d.getDay());
  if (day.length < 2) {
    day = '0' + day;
  }

  return year + month + day;
};

export const getQueryString = (search: string) => {
  const queryString = search.substring(1);
  let queryInstance: IQueryString = {};

  queryString.split('&').forEach((query) => {
    const key = query.split('=')[0];
    const value = query.split('=')[1];
    queryInstance[key] = decodeURIComponent(value);
  });

  return queryInstance;
};
