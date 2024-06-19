export interface Lecture {
    id: number;
    date: string;
    time: string;
    speaker_id: number;
    theme_id: number;
    speaker?: string;
    theme?: string;
  }
  
  export interface Speaker {
    id: number;
    name: string;
    phone: string;
    email: string;
  }
  
  export interface Theme {
    id: number;
    title: string;
    summary: string;
    subject: string
  }