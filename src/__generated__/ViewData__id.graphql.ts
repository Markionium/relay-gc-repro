/**
 * @generated SignedSource<<0c1179263e39de3ac32ed1e223d743cd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ViewData__id$data = {
  readonly id: string;
  readonly " $fragmentType": "ViewData__id";
};
export type ViewData__id$key = {
  readonly " $data"?: ViewData__id$data;
  readonly " $fragmentSpreads": FragmentRefs<"ViewData__id">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ViewData__id",
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
  "type": "ViewData",
  "abstractKey": null
};

export default node;
