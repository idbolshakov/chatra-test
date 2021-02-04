import { TCreateDBFacade } from './createDB.types';

export default ({ driver, create }: TCreateDBFacade) => create({ filename: ':memory:', driver });
