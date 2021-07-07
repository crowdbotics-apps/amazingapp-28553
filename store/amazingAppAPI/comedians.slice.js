import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_comedians_list = createAsyncThunk(
  "comedians/api_v1_comedians_list",
  async payload => {
    const response = await apiService.api_v1_comedians_list(payload)
    return response.data
  }
)
export const api_v1_comedians_create = createAsyncThunk(
  "comedians/api_v1_comedians_create",
  async payload => {
    const response = await apiService.api_v1_comedians_create(payload)
    return response.data
  }
)
export const api_v1_comedians_read = createAsyncThunk(
  "comedians/api_v1_comedians_read",
  async payload => {
    const response = await apiService.api_v1_comedians_read(payload)
    return response.data
  }
)
export const api_v1_comedians_update = createAsyncThunk(
  "comedians/api_v1_comedians_update",
  async payload => {
    const response = await apiService.api_v1_comedians_update(payload)
    return response.data
  }
)
export const api_v1_comedians_partial_update = createAsyncThunk(
  "comedians/api_v1_comedians_partial_update",
  async payload => {
    const response = await apiService.api_v1_comedians_partial_update(payload)
    return response.data
  }
)
export const api_v1_comedians_delete = createAsyncThunk(
  "comedians/api_v1_comedians_delete",
  async payload => {
    const response = await apiService.api_v1_comedians_delete(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const comediansSlice = createSlice({
  name: "comedians",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_comedians_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_comedians_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_comedians_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_comedians_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_comedians_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_comedians_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_comedians_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_comedians_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_comedians_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_comedians_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_comedians_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_comedians_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_comedians_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_comedians_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_comedians_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_comedians_delete.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_comedians_delete.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_comedians_delete.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_comedians_list,
  api_v1_comedians_create,
  api_v1_comedians_read,
  api_v1_comedians_update,
  api_v1_comedians_partial_update,
  api_v1_comedians_delete,
  slice: comediansSlice
}
