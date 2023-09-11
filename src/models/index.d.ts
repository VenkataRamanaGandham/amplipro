import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerSubscribeNow = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SubscribeNow, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly SubscriptionEmailId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySubscribeNow = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SubscribeNow, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly SubscriptionEmailId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SubscribeNow = LazyLoading extends LazyLoadingDisabled ? EagerSubscribeNow : LazySubscribeNow

export declare const SubscribeNow: (new (init: ModelInit<SubscribeNow>) => SubscribeNow) & {
  copyOf(source: SubscribeNow, mutator: (draft: MutableModel<SubscribeNow>) => MutableModel<SubscribeNow> | void): SubscribeNow;
}

type EagerContactUsCreateForm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContactUsCreateForm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly EmailId?: string | null;
  readonly Message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContactUsCreateForm = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContactUsCreateForm, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly EmailId?: string | null;
  readonly Message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ContactUsCreateForm = LazyLoading extends LazyLoadingDisabled ? EagerContactUsCreateForm : LazyContactUsCreateForm

export declare const ContactUsCreateForm: (new (init: ModelInit<ContactUsCreateForm>) => ContactUsCreateForm) & {
  copyOf(source: ContactUsCreateForm, mutator: (draft: MutableModel<ContactUsCreateForm>) => MutableModel<ContactUsCreateForm> | void): ContactUsCreateForm;
}