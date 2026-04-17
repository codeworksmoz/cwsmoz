export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      acm_curriculum: {
        Row: {
          description: string | null
          id: string
          ka_code: string
          ka_name: string
          ka_name_pt: string | null
          level: number
          order_index: number | null
          prerequisites: Json | null
          required_hours: number | null
        }
        Insert: {
          description?: string | null
          id?: string
          ka_code: string
          ka_name: string
          ka_name_pt?: string | null
          level: number
          order_index?: number | null
          prerequisites?: Json | null
          required_hours?: number | null
        }
        Update: {
          description?: string | null
          id?: string
          ka_code?: string
          ka_name?: string
          ka_name_pt?: string | null
          level?: number
          order_index?: number | null
          prerequisites?: Json | null
          required_hours?: number | null
        }
        Relationships: []
      }
      certificates: {
        Row: {
          certificate_type: string
          certificate_url: string | null
          id: string
          issued_at: string | null
          metadata: Json | null
          user_id: string
          verification_code: string | null
        }
        Insert: {
          certificate_type: string
          certificate_url?: string | null
          id?: string
          issued_at?: string | null
          metadata?: Json | null
          user_id: string
          verification_code?: string | null
        }
        Update: {
          certificate_type?: string
          certificate_url?: string | null
          id?: string
          issued_at?: string | null
          metadata?: Json | null
          user_id?: string
          verification_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "certificates_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      exercises: {
        Row: {
          description: string | null
          difficulty: string | null
          exercise_file: string | null
          hints: Json | null
          id: string
          ka_id: string
          language: string
          lesson_id: string | null
          order_index: number | null
          solution_code: string | null
          template_code: string | null
          test_cases: Json | null
          title: string
        }
        Insert: {
          description?: string | null
          difficulty?: string | null
          exercise_file?: string | null
          hints?: Json | null
          id?: string
          ka_id: string
          language: string
          lesson_id?: string | null
          order_index?: number | null
          solution_code?: string | null
          template_code?: string | null
          test_cases?: Json | null
          title: string
        }
        Update: {
          description?: string | null
          difficulty?: string | null
          exercise_file?: string | null
          hints?: Json | null
          id?: string
          ka_id?: string
          language?: string
          lesson_id?: string | null
          order_index?: number | null
          solution_code?: string | null
          template_code?: string | null
          test_cases?: Json | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "exercises_ka_id_fkey"
            columns: ["ka_id"]
            isOneToOne: false
            referencedRelation: "acm_curriculum"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exercises_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      fcc_sync: {
        Row: {
          certifications_earned: Json | null
          fcc_progress: Json | null
          fcc_username: string | null
          id: string
          last_synced_at: string | null
          user_id: string
        }
        Insert: {
          certifications_earned?: Json | null
          fcc_progress?: Json | null
          fcc_username?: string | null
          id?: string
          last_synced_at?: string | null
          user_id: string
        }
        Update: {
          certifications_earned?: Json | null
          fcc_progress?: Json | null
          fcc_username?: string | null
          id?: string
          last_synced_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fcc_sync_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      forum_comments: {
        Row: {
          content: string | null
          created_at: string
          exercise_id: string | null
          id: string
          user_avatar_url: string | null
          user_id: string
          user_name: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          exercise_id?: string | null
          id?: string
          user_avatar_url?: string | null
          user_id: string
          user_name?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          exercise_id?: string | null
          id?: string
          user_avatar_url?: string | null
          user_id?: string
          user_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "forum_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      lessons: {
        Row: {
          content_mdx: string | null
          duration_minutes: number | null
          id: string
          ka_id: string
          module_number: number | null
          order_index: number | null
          theory: Json | null
          title: string
          title_translations: Json | null
          video_url: string | null
        }
        Insert: {
          content_mdx?: string | null
          duration_minutes?: number | null
          id?: string
          ka_id: string
          module_number?: number | null
          order_index?: number | null
          theory?: Json | null
          title: string
          title_translations?: Json | null
          video_url?: string | null
        }
        Update: {
          content_mdx?: string | null
          duration_minutes?: number | null
          id?: string
          ka_id?: string
          module_number?: number | null
          order_index?: number | null
          theory?: Json | null
          title?: string
          title_translations?: Json | null
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lessons_ka_id_fkey"
            columns: ["ka_id"]
            isOneToOne: false
            referencedRelation: "acm_curriculum"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          full_name: string | null
          id: string
          level: number | null
          preferred_language: string | null
          total_xp: number | null
          updated_at: string | null
          username: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          level?: number | null
          preferred_language?: string | null
          total_xp?: number | null
          updated_at?: string | null
          username: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          level?: number | null
          preferred_language?: string | null
          total_xp?: number | null
          updated_at?: string | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      quizzes: {
        Row: {
          description: string | null
          id: string
          ka_id: string
          passing_score: number | null
          questions: Json
          time_limit_minutes: number | null
          title: string
        }
        Insert: {
          description?: string | null
          id?: string
          ka_id: string
          passing_score?: number | null
          questions?: Json
          time_limit_minutes?: number | null
          title: string
        }
        Update: {
          description?: string | null
          id?: string
          ka_id?: string
          passing_score?: number | null
          questions?: Json
          time_limit_minutes?: number | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "quizzes_ka_id_fkey"
            columns: ["ka_id"]
            isOneToOne: false
            referencedRelation: "acm_curriculum"
            referencedColumns: ["id"]
          },
        ]
      }
      user_exercise_submissions: {
        Row: {
          attempts: number | null
          code_submitted: string | null
          exercise_id: string
          id: string
          status: string | null
          submitted_at: string | null
          test_results: Json | null
          user_id: string
        }
        Insert: {
          attempts?: number | null
          code_submitted?: string | null
          exercise_id: string
          id?: string
          status?: string | null
          submitted_at?: string | null
          test_results?: Json | null
          user_id: string
        }
        Update: {
          attempts?: number | null
          code_submitted?: string | null
          exercise_id?: string
          id?: string
          status?: string | null
          submitted_at?: string | null
          test_results?: Json | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_exercise_submissions_exercise_id_fkey"
            columns: ["exercise_id"]
            isOneToOne: false
            referencedRelation: "exercises"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_exercise_submissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_progress: {
        Row: {
          completed_at: string | null
          id: string
          last_accessed_at: string | null
          lesson_id: string
          progress_percentage: number | null
          status: string | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          id?: string
          last_accessed_at?: string | null
          lesson_id: string
          progress_percentage?: number | null
          status?: string | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          id?: string
          last_accessed_at?: string | null
          lesson_id?: string
          progress_percentage?: number | null
          status?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_progress_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_quiz_attempts: {
        Row: {
          answers: Json | null
          completed_at: string | null
          id: string
          passed: boolean | null
          quiz_id: string
          score: number | null
          started_at: string | null
          user_id: string
        }
        Insert: {
          answers?: Json | null
          completed_at?: string | null
          id?: string
          passed?: boolean | null
          quiz_id: string
          score?: number | null
          started_at?: string | null
          user_id: string
        }
        Update: {
          answers?: Json | null
          completed_at?: string | null
          id?: string
          passed?: boolean | null
          quiz_id?: string
          score?: number | null
          started_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_quiz_attempts_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_quiz_attempts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment_xp: {
        Args: {
          user_id_param: string
          xp_to_add: number
        }
        Returns: undefined
      }
      update_updated_at_column: {
        Args: Record<string, unknown>
        Returns: unknown
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
        Database["public"]["Views"])
    ? (Database["public"]["Tables"] &
        Database["public"]["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
    ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
    ? Database["public"]["Enums"][PublicEnumNameOrOptions]
    : never
