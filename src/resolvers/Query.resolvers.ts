import { ViewData } from "./viewData.resolver";

/**
 * @RelayResolver Query.viewData: ViewData
 */
export function viewData(): ViewData {
  return {
    id: "viewData",
  } as unknown as ViewData;
}
