export type Ticket = {
  ticket: {
    title: string;
    description: string;
    category: string;
    priority: number;
    progress: number;
    status: string;
    active: boolean;
    _id: string;
    createdAt: string;
  };
};

export enum Status {
  DONE = "done",
  STARTED = "started",
  NOT_STARTED = "not started",
}
