// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SubscribeNow, ContactUsCreateForm } = initSchema(schema);

export {
  SubscribeNow,
  ContactUsCreateForm
};