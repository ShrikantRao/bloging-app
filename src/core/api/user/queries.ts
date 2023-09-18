import {User} from './types';
import {apiFetch} from '../base';

const apiRoutes = '/users/';

export async function fetchUser(useId = 1) {
  const result = await apiFetch(apiRoutes + useId);
  return result.data as User;
}
