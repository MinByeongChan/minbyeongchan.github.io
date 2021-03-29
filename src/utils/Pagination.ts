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
  let resultList = []
  const pivot = Math.floor(pagingIndicator / 2);
  var pageStart, pageEnd;

  if (0 <= currPage && currPage <= pivot) {
    pageStart = 0;
    pageEnd = maxPage;
  } else if (
    maxPage - pivot <= currPage &&
    currPage <= maxPage
  ) {
    pageStart = maxPage - pivot - 1;
    pageEnd = maxPage + 1;
  } else {
    pageStart = currPage - pivot;
    pageEnd = currPage + pivot + 1;
  }

  for (let i = pageStart; i < pageEnd; i++) {
    resultList.push(i+1);
  }

  // SetPagingComma(AppLayoutGlobal);

  return resultList;
}