import { SiteLevel } from "./enums/site-level.enum";
import { LootItem } from "./loot-item.model";
import { Site } from "./site.model";

export class Encounter {
  system: string;
  site: Site;
  level:  SiteLevel;
  locationNumber: number;
  escalated: boolean;
  spawnedCommander: boolean;
  wasBlitzed: boolean;
  loot: LootItem[];
}