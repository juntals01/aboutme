// Shared types, constants, and utilities
// Add exports here as needed

export interface ApiResponse<T = unknown> {
  data: T;
  message: string;
  statusCode: number;
}

export interface PaginatedResponse<T = unknown> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ErrorResponse {
  message: string;
  statusCode: number;
  error?: string;
}
