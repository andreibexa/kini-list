export interface IPageLinks {
  element: React.FC;
  label: string;
  path: string;
  index: boolean;
  icon: DetailedReactHTMLElement<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  visible: boolean;
}
