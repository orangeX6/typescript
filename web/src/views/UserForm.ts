import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'mouseenter:h1': this.onHeaderHover,
      'click:#set-age': this.onSetAgeClick.bind(this),
      'click:#set-name': this.onSetNameClick.bind(this),
      'click:#save-model': this.onSaveClick.bind(this),
    };
  }

  onSetAgeClick(): void {
    this.model.setRandomAge();
  }

  // one of the approaches
  // onSetNameClick(e: PointerEvent): void {
  // const element = e.target as HTMLInputElement;
  // const input = element.closest('div')!.querySelector('input');
  // }
  onSetNameClick(): void {
    const input = this.parent.querySelector('input');
    if (!input) return;
    const name = input.value;
    this.model.set({ name });
  }

  onSaveClick(): void {
    this.model.save();
  }

  onHeaderHover(): void {
    const h1 = document.querySelector('h1');
    h1 && (h1.style.color = '#444444');
  }

  template(): string {
    return `
    <div>
      <input placeholder=${this.model.get('name')} />
      <button id="set-name">Change Name</button>
      <button id="set-age">Set Random Age</button>
      <button id="save-model">Save User</button>
    </div>
    `;
  }
}
