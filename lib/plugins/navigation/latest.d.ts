export interface NavigationNode {
  attributes: {
    attribute: string;
    value: string;
  }[];
  href: string;
  newWindow: boolean;
  title: string;
  type: string;
}

export interface NavigationNodes extends Array<NavigationNode> {
}