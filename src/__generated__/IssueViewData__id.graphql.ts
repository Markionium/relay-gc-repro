/**
 * @generated SignedSource<<b1abf7598428c6579c68ab451f2b0a13>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueViewData__id$data = {
  readonly id: string;
  readonly " $fragmentType": "IssueViewData__id";
};
export type IssueViewData__id$key = {
  readonly " $data"?: IssueViewData__id$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueViewData__id">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueViewData__id",
  "selections": [
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "IssueViewData",
  "abstractKey": null
};

export default node;
