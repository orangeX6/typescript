import { View } from './View';
import { User, UserProps } from '../models/User';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

export class UserEdit extends View<User, UserProps> {
  sectionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form',
    };
  }

  onRender(): void {
    new UserForm(this.sections.userForm, this.model).render();
    new UserShow(this.sections.userShow, this.model).render();
  }

  template(): string {
    return `
        <div>
          <div class='user-show'></div>
          <div class='user-form'></div>
        </div>
      `;
  }
}
