import { UserEdit } from './views/UserEdit';
import { User, UserProps } from './models/User';
import { UserList } from './views/UserList';
import { Collection } from './models/Collection';

// const user = User.buildUser({ name: 'Robin', age: 30 });
// const userEdit = new UserEdit(document.getElementById('root')!, user);
// userEdit.render();
// console.log(userEdit);

const users = User.buildUserCollection();
users.on('change', () => {
  const root = document.getElementById('root')!;

  new UserList(root, users).render();
});

users.fetch();
