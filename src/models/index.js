// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { HomePageImages, SubscribeNow, ContactUsCreateForm } = initSchema(schema);

export {
  HomePageImages,
  SubscribeNow,
  ContactUsCreateForm
};