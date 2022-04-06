import React, { HTMLAttributes } from 'react';

export interface IPageLinks {
  component: React.FC;
  label: string;
  path: string;
  index: boolean;
  icon: React.DOMElement<HTMLAttributes<Element>, Element>;
}
