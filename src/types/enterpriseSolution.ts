// types/enterpriseSolution.ts
export interface IEnterpriseSolution {
  _id: string;
  name: string;
  description: string;
  targetInstitutions: string[];
  features: string[];
  isWhiteLabel: boolean;
  hasAnalyticsDashboards: boolean;
  hasCohortTracking: boolean;
  hasBulkusermanagement?: boolean;
  minUsers?: number;
  contactSalesRequired: boolean;
  createdAt: string;
  updatedAt: string;
}
