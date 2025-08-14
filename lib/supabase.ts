import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      shopping_lists: {
        Row: {
          id: string
          user_id: string
          name: string
          phase: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          phase: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          phase?: number
          created_at?: string
          updated_at?: string
        }
      }
      shopping_items: {
        Row: {
          id: string
          list_id: string
          name: string
          category: string
          quantity: string
          checked: boolean
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          list_id: string
          name: string
          category: string
          quantity: string
          checked?: boolean
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          list_id?: string
          name?: string
          category?: string
          quantity?: string
          checked?: boolean
          notes?: string | null
          created_at?: string
        }
      }
    }
  }
}