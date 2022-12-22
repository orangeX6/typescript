import { Model, HasId } from '../models/Model';

export abstract class View<T extends Model<K>, K extends HasId> {
  sections: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  sectionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  bindModel(): void {
    this.model.on('change', () => this.render());
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    // for (let eventKey in eventsMap) {
    // }
    for (let eventKey of Object.keys(eventsMap)) {
      const [eventName, selector] = eventKey.split(':');
      fragment
        .querySelectorAll(selector)
        .forEach((el) => el.addEventListener(eventName, eventsMap[eventKey]));
    }
  }

  mapSections(fragment: DocumentFragment): void {
    const sectionsMap = this.sectionsMap();

    for (let key in sectionsMap) {
      const selector = sectionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) this.sections[key] = element;
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapSections(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}
