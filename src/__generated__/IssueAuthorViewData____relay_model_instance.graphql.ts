/**
 * @generated SignedSource<<17a1cb09c2f84d3ff006eee52f2eb9ef>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
import { IssueAuthorViewData as issueAuthorViewDataRelayModelInstanceResolverType } from "../resolvers/viewData.resolver";
// Type assertion validating that `issueAuthorViewDataRelayModelInstanceResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(issueAuthorViewDataRelayModelInstanceResolverType satisfies (
  id: IssueAuthorViewData__id$data['id'],
) => unknown);
export type IssueAuthorViewData____relay_model_instance$data = {
  readonly __relay_model_instance: NonNullable<ReturnType<typeof issueAuthorViewDataRelayModelInstanceResolverType>>;
  readonly " $fragmentType": "IssueAuthorViewData____relay_model_instance";
};
export type IssueAuthorViewData____relay_model_instance$key = {
  readonly " $data"?: IssueAuthorViewData____relay_model_instance$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueAuthorViewData____relay_model_instance">;
};

import {IssueAuthorViewData as issueAuthorViewDataRelayModelInstanceResolver} from '../resolvers/viewData.resolver';
import IssueAuthorViewData__id_graphql from './IssueAuthorViewData__id.graphql';
import {resolverDataInjector} from 'relay-runtime/experimental';

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueAuthorViewData____relay_model_instance",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "IssueAuthorViewData__id"
      },
      "kind": "RelayResolver",
      "name": "__relay_model_instance",
      "resolverModule": resolverDataInjector(IssueAuthorViewData__id_graphql, issueAuthorViewDataRelayModelInstanceResolver, 'id', true),
      "path": "__relay_model_instance"
    }
  ],
  "type": "IssueAuthorViewData",
  "abstractKey": null
};

export default node;
