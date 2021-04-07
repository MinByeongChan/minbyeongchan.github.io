export function convertTo2D<T>(arr: T[], size: number) {
  const res: T[][] = [];

  arr.forEach((elt, ind) => {
    if (ind % size === 0) {
      res.push([elt]);
    } else {
      res[res.length - 1].push(elt);
    }
  });

  return res;
}

export function convertUrlToLinkHref(url: string) {
  if (url === '/') {
    return '/';
  }

  return '/[page]';
}

// 페이지 리스트 생성 함수
export function createPageList(currPage: number, maxPage: number, pagingIndicator: number) {
  let resultList = [];
  const pivot = Math.ceil(pagingIndicator / 2);
  const interval = pivot - 1;
  var pageStart, pageEnd;

  if (1 <= currPage && currPage <= pivot) {
    pageStart = 1;
    if (maxPage <= pivot) {
      pageEnd = maxPage;
    } else {
      pageEnd = pivot + interval;
    }
  } else if (maxPage - pivot < currPage && currPage <= maxPage) {
    pageStart = maxPage - pivot - 1;
    pageEnd = maxPage;
  } else {
    pageStart = currPage - interval;
    pageEnd = currPage + interval;
  }

  for (let i = pageStart; i <= pageEnd; i++) {
    resultList.push(i);
  }

  // SetPagingComma(AppLayoutGlobal);

  return resultList;
}
