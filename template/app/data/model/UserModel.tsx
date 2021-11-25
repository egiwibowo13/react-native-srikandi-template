export interface UserModel {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

export interface UserPageModel {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserModel[];
}

export interface UserPageRequst {
  page: number;
}
