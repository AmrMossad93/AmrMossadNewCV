import {ISocialLinks} from "./social-links";

export interface IEvent {
  id: number;
  eventPlanerTeam: string;
  eventDate: string;
  eventTitle: string;
  sloganTitle: string;
  eventDetails: string;
  eventImages: string[];
  eventOwnersSocialLinks: ISocialLinks;
}
