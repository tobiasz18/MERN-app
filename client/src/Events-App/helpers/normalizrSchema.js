import { schema } from 'normalizr';

export const event = new schema.Entity('events');
export const search = new schema.Entity('search');

export const eventsSchema = [event];

export const searchSchema = [search];