import { Promotion } from "./promotions";

export type RouteParams = {
  Promotions: undefined;
  PromotionDetail: { promotionId: Promotion["Id"] };
};
