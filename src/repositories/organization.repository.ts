import {DefaultCrudRepository} from '@loopback/repository';
import {Organization, OrganizationRelations} from '../models';
import {MedipharmadbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrganizationRepository extends DefaultCrudRepository<
  Organization,
  typeof Organization.prototype.id,
  OrganizationRelations
> {
  constructor(
    @inject('datasources.medipharmadb') dataSource: MedipharmadbDataSource,
  ) {
    super(Organization, dataSource);
  }
}
