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

export function createPageList(currPage: number, maxPage: number, pagingIndicator: number) {
  let resultList = [];
  const pivot = Math.ceil(pagingIndicator / 2);
  const interval = pivot - 1;
  var pageStart, pageEnd;

  if (1 <= currPage && currPage <= pivot) {
    pageStart = 1;
    pageEnd = pivot + interval - 1;
  } else if (maxPage - pivot < currPage && currPage <= maxPage) {
    pageStart = maxPage - pivot;
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
