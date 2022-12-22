type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  // This will work without arrow functions but that is because we are storing our events on events property inside eventing and inside user.ts we are referencing events and using that for eventing
  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach((callback) => callback());
  };
}
