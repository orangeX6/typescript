import { User, UserProps } from '../models/User';
import { CollectionView } from './CollectionView';
import { UserShow } from './UserShow';

export class UserList extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserShow(itemParent, model).render();

    //   const html = `
    //   <div>
    //     <h1>User Detail</h1>
    //     <div>User Name: ${model.get('name')}</div>
    //     <div>User Age: ${model.get('age')}</div>
    //   </div>
    // `;

    //   itemParent.innerHTML = html;
  }
}
