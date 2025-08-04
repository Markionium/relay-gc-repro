import { DataID } from 'relay-runtime'

/**
 * @RelayResolver ViewData
 */
export function ViewData(): { id: DataID; searchPlaceholderText: string; noResultsText: string; issueModel: { id: DataID } } {
  return {
    id: "viewData",
    searchPlaceholderText: "Search issues",
    noResultsText: "No issues found",
    issueModel: {
      id: "issueViewData",
    },
  };
}
export type ViewData = {
  searchPlaceholderText: string;
  noResultsText: string;
  issueModel: IssueViewData;
};

/**
 * @RelayResolver IssueViewData
 */
export function IssueViewData(): { id: DataID; showAuthor: boolean; authorModel: { id: DataID } } {
  return {
    id: "issueViewData",
    showAuthor: true,
    authorModel: {
      id: "issueAuthorViewData",
    },
  };
}

export type IssueViewData = {
  showAuthor: boolean;
  authorModel: IssueAuthorViewData;
};



/**
 * @RelayResolver IssueAuthorViewData
 */
export function IssueAuthorViewData(): { id: DataID; avatarSize: number } {
  return {
    id: "issueAuthorViewData",
    avatarSize: 16,
  };
}

export type IssueAuthorViewData = {
  avatarSize: number;
};

/**
 * @RelayResolver Query.viewData: ViewData
 */
export function viewData(): { id: DataID } {
  return {
    id: "viewData",
  };
}

/**
 * @RelayResolver ViewData.searchPlaceholderText: String
 */
export function searchPlaceholderText(viewData: ViewData): string {
  return viewData.searchPlaceholderText;
}

/**
 * @RelayResolver ViewData.noResultsText: String
 */
export function noResultsText(viewData: ViewData): string {
  return viewData.noResultsText;
}

/**
 * @RelayResolver ViewData.issueModel: IssueViewData
 */
export function issueModel(viewData: ViewData): IssueViewData {
  return viewData.issueModel;
}

/**
 * @RelayResolver IssueViewData.showAuthor: Boolean
 */
export function showAuthor(viewData: IssueViewData): boolean {
  return viewData.showAuthor;
}

/**
 * @RelayResolver IssueViewData.authorModel: IssueAuthorViewData
 */
export function authorModel(viewData: IssueViewData): IssueAuthorViewData {
  return viewData.authorModel;
}

/**
 * @RelayResolver IssueAuthorViewData.avatarSize: Int
 */
export function avatarSize(viewData: IssueAuthorViewData): number {
  return viewData?.avatarSize;
}
