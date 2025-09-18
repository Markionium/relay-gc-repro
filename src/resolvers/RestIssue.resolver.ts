import { DataID } from "relay-runtime";

export const ISSUES_STORE = new Map<DataID, RestIssue>();

export type RestIssue = {
  id: DataID;
  title: string;
  url: string;
  number: number;
  author: string;
};

/**
 * @RelayResolver
 */
export function RestIssue(id: DataID): RestIssue | undefined {
  const issue = ISSUES_STORE.get(id);
  return issue;
}

/**
 * @RelayResolver
 */
export function title(issue: RestIssue): string {
  return issue.title;
}

/**
 * @RelayResolver
 */
export function url(issue: RestIssue): string {
  return issue.url;
}

/**
 * @RelayResolver
 */
export function author(issue: RestIssue): string {
  return issue.author;
}

/**
 * @RelayResolver
 */
export function number(issue: RestIssue): number {
  return issue.number;
}
