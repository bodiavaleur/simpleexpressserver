import { ValueOf } from "../helpers/types";

const rootEndpoint = "/user";

export const USER_ROUTES = {
  ROOT: rootEndpoint,
  MY_PROFILE: `${rootEndpoint}/me`,
  USER_BY_ID: `${rootEndpoint}/:userId`,
};

export type UserRouteType = ValueOf<typeof USER_ROUTES>;
