import { PeoplesApi } from '../../api/api.vm';

export interface PeopleEntityApi {
  data: PeoplesApi | undefined;
  setData: (users: PeoplesApi) => void;
}
