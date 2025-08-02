/**
 * @generated SignedSource<<b305e1046f08b384a725f87fceae4b19>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
import { ViewData as viewDataRelayModelInstanceResolverType } from "../resolvers/viewData.resolver";
// Type assertion validating that `viewDataRelayModelInstanceResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(viewDataRelayModelInstanceResolverType satisfies (
  id: ViewData__id$data['id'],
) => unknown);
export type ViewData____relay_model_instance$data = {
  readonly __relay_model_instance: NonNullable<ReturnType<typeof viewDataRelayModelInstanceResolverType>>;
  readonly " $fragmentType": "ViewData____relay_model_instance";
};
export type ViewData____relay_model_instance$key = {
  readonly " $data"?: ViewData____relay_model_instance$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewData____relay_model_instance">;
};

import {ViewData as viewDataRelayModelInstanceResolver} from '../resolvers/viewData.resolver';
import ViewData__id_graphql from './ViewData__id.graphql';
import {resolverDataInjector} from 'relay-runtime/experimental';

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ViewData____relay_model_instance",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ViewData__id"
      },
      "kind": "RelayResolver",
      "name": "__relay_model_instance",
      "resolverModule": resolverDataInjector(ViewData__id_graphql, viewDataRelayModelInstanceResolver, 'id', true),
      "path": "__relay_model_instance"
    }
  ],
  "type": "ViewData",
  "abstractKey": null
};

export default node;
