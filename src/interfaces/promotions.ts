
export interface Promotion {
  Id: number;
  Title: string;
  ImageUrl: string;
  BrandIconUrl: string;
  RemainingText: string;
  PromotionCardColor: string;
  BrandIconColor: string;
  BrandPromotionCardParticipationText: string;
  SeoName: string;
  ScenarioType: string;
  Unavailable: boolean;
  Unvisible: boolean;
  ListButtonText: string;
  ListButtonTextBackGroudColor: string;
  CardType: string;
  ExternalUrl: string | null;
  ExternalType: string | null;
  ExternalRedirectType: string | null;
  ExternalWebviewType: string | null;
  ExternalLoginGate: string | null;
  IsLuckyDay: boolean;
  LuckyDayText: string;
  LuckyDayTextColor: string | null;
  LuckyDayBackgroundColor: string | null;
}

export interface PromotionDetailType {
  BrandIconColor: string;
  BrandIconUrl: string;
  BrandPromotionCardParticipationText: string;
  Description: string;
  EndDate: string;
  Id: number;
  ImageUrl: string;
  CountryTimeZone: number;
  RemainingText: string;
  StartDate: string;
  Title: string;
  Type: string;
  CardType: string;
  ScenarioType: string;
  SeoName: string;
  Unavailable: boolean;
  IsMapAvailable: boolean;
  Unvisible: boolean;
  DetailButtonText: string;
  ListButtonText: string | null;
  LuckyDayText: string;
  LuckyDayTextColor: string | null;
  LuckyDayBackgroundColor: string | null;
  ExternalUrl: string | null;
  ExternalType: string | null;
  ExternalRedirectType: string | null;
  ExternalWebviewType: string | null;
  ExternalLoginGate: string | null;
  PromotionDetailItemAreas: PromotionDetailItemArea[];
  Contents: any[]; // You can replace 'any[]' with specific type if available
  PromotionTags: any[]; // You can replace 'any[]' with specific type if available
  PromotionGalleries: PromotionGallery[];
  NextFlowConfigurations: any; // You can replace 'any' with specific type if available
  GameWin: any; // You can replace 'any' with specific type if available
}

interface PromotionDetailItemArea {
  Title: string;
  Description: string;
  OpenedIconUrl: string;
  ClosedIconUrl: string;
  UseMapButton: boolean;
  PromotionDetailItems: PromotionDetailItem[];
}

interface PromotionDetailItem {
  Title: string;
  Description: string;
  ImageUrl: string;
}

interface PromotionGallery {
  DocumentUrl: string;
  DocumentType: string;
  CoverImageUrl: string;
}

