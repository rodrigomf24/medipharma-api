import {DefaultCrudRepository} from '@loopback/repository';
import {UserCredentials, UserCredentialsRelations} from '../models';
import {inject} from '@loopback/core';
import {MedipharmadbDataSource} from '../datasources';

export class UserCredentialsRepository extends DefaultCrudRepository<
  UserCredentials,
  typeof UserCredentials.prototype.id,
  UserCredentialsRelations
> {
  constructor(
    @inject('datasources.medipharmadb') dataSource: MedipharmadbDataSource,
  ) {
    super(UserCredentials, dataSource);
  }
}
