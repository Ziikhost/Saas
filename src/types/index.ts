export interface ContentPiece {
  id: string;
  title: string;
  status: 'draft' | 'published' | 'archived';
  type: 'article' | 'social' | 'email';
  createdAt: string;
  updatedAt: string;
  content: string;
  seoScore: number;
  keywords: string[];
  targetAudience: string;
}

export interface StrategyGoal {
  id: string;
  topic: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed';
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  brandVoice?: string;
  companyName?: string;
}
