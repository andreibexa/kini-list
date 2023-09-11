export interface AllRoutes {
  uid: number;
  element: React.FC;
  label?: string;
  path: string;
  index?: boolean;
  icon?: ReactElement;
  visible?: boolean;
}
