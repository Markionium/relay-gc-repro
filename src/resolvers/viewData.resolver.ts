/**
 * @RelayResolver ViewData
 */
export function ViewData(): ViewData {
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
export function IssueViewData(): IssueViewData {
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
export function IssueAuthorViewData(): IssueAuthorViewData {
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
export function viewData(): ViewData {
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
  return viewData.avatarSize;
}
