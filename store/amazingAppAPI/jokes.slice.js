import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_jokes_list = createAsyncThunk(
  "jokes/api_v1_jokes_list",
  async payload => {
    const response = await apiService.api_v1_jokes_list(payload)
    return response.data
  }
)
export const api_v1_jokes_create = createAsyncThunk(
  "jokes/api_v1_jokes_create",
  async payload => {
    const response = await apiService.api_v1_jokes_create(payload)
    return response.data
  }
)
export const api_v1_jokes_read = createAsyncThunk(
  "jokes/api_v1_jokes_read",
  async payload => {
    const response = await apiService.api_v1_jokes_read(payload)
    return response.data
  }
)
export const api_v1_jokes_update = createAsyncThunk(
  "jokes/api_v1_jokes_update",
  async payload => {
    const response = await apiService.api_v1_jokes_update(payload)
    return response.data
  }
)
export const api_v1_jokes_partial_update = createAsyncThunk(
  "jokes/api_v1_jokes_partial_update",
  async payload => {
    const response = await apiService.api_v1_jokes_partial_update(payload)
    return response.data
  }
)
export const api_v1_jokes_delete = createAsyncThunk(
  "jokes/api_v1_jokes_delete",
  async payload => {
    const response = await apiService.api_v1_jokes_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_jokes_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_jokes_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_jokes_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_jokes_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_jokes_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_jokes_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_jokes_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_jokes_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_jokes_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_jokes_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_jokes_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_jokes_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_jokes_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_jokes_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_jokes_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_jokes_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_jokes_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_jokes_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_jokes_list,
  api_v1_jokes_create,
  api_v1_jokes_read,
  api_v1_jokes_update,
  api_v1_jokes_partial_update,
  api_v1_jokes_delete,
  slice: jokesSlice
}
