﻿import Dexie, { type EntityTable } from "dexie";

interface Auto {
  id: number;
  name: string;
  alliance: string;
}

const db = new Dexie("AutosDatabase") as Dexie & {
  autos: EntityTable<Auto, "id">;
};

db.version(1).stores({
  autos: "++id, name, alliance"
});

export type { Auto };
export { db };
