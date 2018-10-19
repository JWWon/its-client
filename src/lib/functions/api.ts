interface Result {
  [x: string]: string;
}

export const splitQueryFromURL = (location: any) => {
  let result: Result = {};
  let query = location.search.replace(/^\?/g, '');
  query = query.split('&');
  query.forEach((data: string) => {
    const split = data.split('=');
    result = { ...result, [split[0]]: split[1] };
  });

  return result;
};
