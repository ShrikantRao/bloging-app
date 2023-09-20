import {Blogs} from './types';
import {apiFetch} from '../base';

const apiRoutes = '/users/USEID/posts';

export async function fetchBlogs(useId: number) {
  if (!useId) {
    return;
  }
  const result = await apiFetch(apiRoutes.replace('USEID', useId.toString()));
  return result.data as Blogs;
}
