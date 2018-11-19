import _ from 'lodash';

interface Result {
  [x: string]: string;
}

export const getSearchFromURL = (location: any) => {
  let result: Result = {};
  let query = location.search.replace(/^\?/g, '');
  query = decodeURI(query);
  query = query.split('&');
  _.forEach(query, (data: string) => {
    const split = data.split('=');
    result = { ...result, [split[0]]: split[1] };
  });
  return result;
};

export const getHashFromURL = (location: any) => {
  const hash = location.hash.replace(/^#/g, '');
  return decodeURI(hash);
};
