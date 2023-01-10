namespace App {
  //_ Component Base Class
  export abstract class Component<
    T extends HTMLElement,
    U extends HTMLElement
  > {
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor(
      templateId: string,
      hostElementId: string,
      newElementId?: string,
      insertAtStart?: boolean
    ) {
      // this.templateElement = <HTMLTemplateElement>document.getElementById(
      this.templateElement = document.getElementById(
        templateId
      )! as HTMLTemplateElement;
      this.hostElement = document.getElementById(hostElementId)! as T;

      const importedNode = document.importNode(
        this.templateElement.content,
        true
      );
      // console.log(importedNode.firstElementChild);
      this.element = importedNode.firstElementChild as U;
      newElementId && (this.element.id = newElementId);

      this.attach(insertAtStart);
    }

    private attach(insertAtBeginning: boolean | undefined) {
      this.hostElement.insertAdjacentElement(
        insertAtBeginning ? 'afterbegin' : 'beforeend',
        this.element
      );
    }

    abstract configure?(): void;
    abstract renderContent(): void;
  }
}
