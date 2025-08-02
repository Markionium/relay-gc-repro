/**
 * @generated SignedSource<<31439d3a959906df2a48de239601caa1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
import { IssueViewData as issueViewDataRelayModelInstanceResolverType } from "../resolvers/viewData.resolver";
// Type assertion validating that `issueViewDataRelayModelInstanceResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(issueViewDataRelayModelInstanceResolverType satisfies (
  id: IssueViewData__id$data['id'],
) => unknown);
export type IssueViewData____relay_model_instance$data = {
  readonly __relay_model_instance: NonNullable<ReturnType<typeof issueViewDataRelayModelInstanceResolverType>>;
  readonly " $fragmentType": "IssueViewData____relay_model_instance";
};
export type IssueViewData____relay_model_instance$key = {
  readonly " $data"?: IssueViewData____relay_model_instance$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueViewData____relay_model_instance">;
};

import {IssueViewData as issueViewDataRelayModelInstanceResolver} from '../resolvers/viewData.resolver';
import IssueViewData__id_graphql from './IssueViewData__id.graphql';
import {resolverDataInjector} from 'relay-runtime/experimental';

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueViewData____relay_model_instance",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "IssueViewData__id"
      },
      "kind": "RelayResolver",
      "name": "__relay_model_instance",
      "resolverModule": resolverDataInjector(IssueViewData__id_graphql, issueViewDataRelayModelInstanceResolver, 'id', true),
      "path": "__relay_model_instance"
    }
  ],
  "type": "IssueViewData",
  "abstractKey": null
};

export default node;
