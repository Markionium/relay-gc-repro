/**
 * @generated SignedSource<<35ac2cce20cd59210c66118d3fa07ea5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueAuthorViewData__id$data = {
  readonly id: string;
  readonly " $fragmentType": "IssueAuthorViewData__id";
};
export type IssueAuthorViewData__id$key = {
  readonly " $data"?: IssueAuthorViewData__id$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueAuthorViewData__id">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueAuthorViewData__id",
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
  "type": "IssueAuthorViewData",
  "abstractKey": null
};

export default node;
