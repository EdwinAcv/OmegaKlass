export interface CourseCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  onMoreDetails: () => void;
}

export interface Course {
  title: string;
  description: string;
  imageUrl?: string;
  onMoreDetails: () => void;
}