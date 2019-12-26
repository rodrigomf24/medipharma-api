import {Entity, model, property} from '@loopback/repository';

@model()
export class Organization extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  owner_id: number;

  @property({
    type: 'object',
    required: true,
  })
  address: string;

  @property({
    type: 'object',
    required: true,
  })
  coordinates: object;

  @property({
    type: 'boolean',
    default: false,
  })
  is_active?: boolean;

  constructor(data?: Partial<Organization>) {
    super(data);
  }
}

export interface OrganizationRelations {
  // describe navigational properties here
}

export type OrganizationWithRelations = Organization & OrganizationRelations;
