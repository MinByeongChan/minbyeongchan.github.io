export const getCookie = (name: any) => {
  const value: string = `; ${document.cookie}`;
  const parts: any[] = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  else return '';
};

export const removeAllCookies = () => {
  document.cookie.split(';').forEach((c) => {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
  });
};

export const isEmpty = (value: any) => {
  if (value === null) return true;
  else if (typeof value === 'undefined') return true;
  else if (typeof value === 'string' && value === '') return true;
  else if (Array.isArray(value) && value.length < 1) return true;
  else if (
    typeof value === 'object' &&
    value.constructor.name === 'Object' &&
    Object.keys(value).length <= 0
  ) {
    return true;
  } else {
    return false;
  }
};
// Comma 설정
export const setDateComma = (value: string) => {
  if (typeof value !== 'string') return;
  if (value.length === 8) {
    return value.substr(0, 4) + '.' + value.substr(4, 2) + '.' + value.substr(6, 2);
  } else if (value.length === 6) {
    return value.substr(0, 2) + '.' + value.substr(2, 2) + '.' + value.substr(4, 2);
  } else {
    return;
  }
};
// Date 변환
export const getDateFormat = (value: string): string => {
  const d = new Date(value);
  let year = d.getFullYear().toString();
  let month = (d.getMonth() + 1).toString();
  if (month.length < 2) {
    month = '0' + month;
  }

  let day = d.getDay().toString();
  if (day.length < 2) {
    day = '0' + day;
  }

  return year + month + day;
};
