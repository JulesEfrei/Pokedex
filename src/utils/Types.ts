export interface Type {
  slot: Number;
  type: {
    name: string;
    url: string;
  };
}

export type SortType = "id" | "name" | "weight" | "height" | "type";

export type Tabs = "about" | "stats" | "evolutions" | "moves";
