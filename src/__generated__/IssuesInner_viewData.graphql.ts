/**
 * @generated SignedSource<<e39bc45696eec06f6f221a5da56be3b4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs, DataID } from "relay-runtime";
import { issueModel as viewDataIssueModelResolverType } from "../resolvers/viewData.resolver";
// Type assertion validating that `viewDataIssueModelResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(viewDataIssueModelResolverType satisfies (
  __relay_model_instance: ViewData____relay_model_instance$data['__relay_model_instance'],
) => {
  readonly id: DataID;
} | null | undefined);
import { noResultsText as viewDataNoResultsTextResolverType } from "../resolvers/viewData.resolver";
// Type assertion validating that `viewDataNoResultsTextResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(viewDataNoResultsTextResolverType satisfies (
  __relay_model_instance: ViewData____relay_model_instance$data['__relay_model_instance'],
) => string | null | undefined);
import { searchPlaceholderText as viewDataSearchPlaceholderTextResolverType } from "../resolvers/viewData.resolver";
// Type assertion validating that `viewDataSearchPlaceholderTextResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(viewDataSearchPlaceholderTextResolverType satisfies (
  __relay_model_instance: ViewData____relay_model_instance$data['__relay_model_instance'],
) => string | null | undefined);
export type IssuesInner_viewData$data = {
  readonly issueModel: {
    readonly " $fragmentSpreads": FragmentRefs<"Issue_viewData">;
  } | null | undefined;
  readonly noResultsText: string | null | undefined;
  readonly searchPlaceholderText: string | null | undefined;
  readonly " $fragmentType": "IssuesInner_viewData";
};
export type IssuesInner_viewData$key = {
  readonly " $data"?: IssuesInner_viewData$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssuesInner_viewData">;
};

import {IssueViewData as issueViewDataRelayModelInstanceResolver} from '../resolvers/viewData.resolver';
import {issueModel as viewDataIssueModelResolver} from '../resolvers/viewData.resolver';
import {noResultsText as viewDataNoResultsTextResolver} from '../resolvers/viewData.resolver';
import {searchPlaceholderText as viewDataSearchPlaceholderTextResolver} from '../resolvers/viewData.resolver';
import IssueViewData__id_graphql from './IssueViewData__id.graphql';
import ViewData____relay_model_instance_graphql from './ViewData____relay_model_instance.graphql';
import {resolverDataInjector} from 'relay-runtime/experimental';

const node: ReaderFragment = (function(){
var v0 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "ViewData____relay_model_instance"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "hasClientEdges": true
  },
  "name": "IssuesInner_viewData",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": (v0/*: any*/),
      "kind": "RelayResolver",
      "name": "searchPlaceholderText",
      "resolverModule": resolverDataInjector(ViewData____relay_model_instance_graphql, viewDataSearchPlaceholderTextResolver, '__relay_model_instance', true),
      "path": "searchPlaceholderText"
    },
    {
      "alias": null,
      "args": null,
      "fragment": (v0/*: any*/),
      "kind": "RelayResolver",
      "name": "noResultsText",
      "resolverModule": resolverDataInjector(ViewData____relay_model_instance_graphql, viewDataNoResultsTextResolver, '__relay_model_instance', true),
      "path": "noResultsText"
    },
    {
      "kind": "ClientEdgeToClientObject",
      "concreteType": "IssueViewData",
      "modelResolvers": {
        "IssueViewData": {
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
          "path": "issueModel.__relay_model_instance"
        }
      },
      "backingField": {
        "alias": null,
        "args": null,
        "fragment": (v0/*: any*/),
        "kind": "RelayResolver",
        "name": "issueModel",
        "resolverModule": resolverDataInjector(ViewData____relay_model_instance_graphql, viewDataIssueModelResolver, '__relay_model_instance', true),
        "path": "issueModel"
      },
      "linkedField": {
        "alias": null,
        "args": null,
        "concreteType": "IssueViewData",
        "kind": "LinkedField",
        "name": "issueModel",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Issue_viewData"
          }
        ],
        "storageKey": null
      }
    }
  ],
  "type": "ViewData",
  "abstractKey": null
};
})();

(node as any).hash = "93de571b38b4f2776d0f6d9406b93080";

export default node;
