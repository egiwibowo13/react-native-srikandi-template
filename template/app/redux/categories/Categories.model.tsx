export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

export type Category = {
  id: string;
  title: string;
  tasks: Task[];
};

export type CategoriesState = {
  data: {
    categories: Category[];
  };
};
