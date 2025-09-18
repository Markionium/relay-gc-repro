import { DataID } from 'relay-runtime'

/**
 * @RelayResolver
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
/** 
 * @RelayResolver
 */
export type ViewData = {
  searchPlaceholderText: string;
  noResultsText: string;
  issueModel: IssueViewData;
};

/**
 * @RelayResolver
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

/**
 * @RelayResolver
 */
export type IssueViewData = {
  showAuthor: boolean;
  authorModel: IssueAuthorViewData;
};



/**
 * @RelayResolver
 */
export function IssueAuthorViewData(): { id: DataID; avatarSize: number } {
  return {
    id: "issueAuthorViewData",
    avatarSize: 16,
  };
}

/**
 * @RelayResolver
 */
export type IssueAuthorViewData = {
  avatarSize: number;
};

/**
 * @RelayResolver
 */
export function searchPlaceholderText(viewData: ViewData): string {
  return viewData.searchPlaceholderText;
}

/**
 * @RelayResolver
 */
export function noResultsText(viewData: ViewData): string {
  return viewData.noResultsText;
}

/**
 * @RelayResolver
 */
export function issueModel(viewData: ViewData): IssueViewData {
  return viewData.issueModel;
}

/**
 * @RelayResolver
 */
export function showAuthor(viewData: IssueViewData): boolean {
  return viewData.showAuthor;
}

/**
 * @RelayResolver
 */
export function authorModel(viewData: IssueViewData): IssueAuthorViewData {
  return viewData.authorModel;
}

/**
 * @RelayResolver
 */
export function avatarSize(viewData: IssueAuthorViewData): number {
  return viewData?.avatarSize;
}
