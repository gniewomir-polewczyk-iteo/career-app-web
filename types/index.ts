export type RoadMapResponse = {
  roadMapName: string;
  roadMap: Roadmap[];
};

export type Roadmap = {
  id: string;
  name: string;
  links: string[];
  description: string;
  longDescription?: string;
  emoji: string;
  parentIds: string[];
};

export type FlowData = {
  longDescription?: string;
  name: string;
  links: string[];
  description: string;
  emoji?: string;
};

export type FlowNode = {
  id: string;
  type: string;
  data: FlowData;
};

export type FlowNodeWithPosition = FlowNode & {
  position: {
    x: number;
    y: number;
  };
};

export type PostType = {
  author: string;
  category: string;
  content: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  title: string;
  id: string;
  parentIds: string[];
};
