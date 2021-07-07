import axios from "axios"
const amazingAppAPI = axios.create({
  baseURL: "https://amazingapp-28553-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_comedians_list(payload) {
  return amazingAppAPI.get(`/api/v1/comedians/`)
}
function api_v1_comedians_create(payload) {
  return amazingAppAPI.post(`/api/v1/comedians/`, payload.data)
}
function api_v1_comedians_read(payload) {
  return amazingAppAPI.get(`/api/v1/comedians/${payload.id}/`)
}
function api_v1_comedians_update(payload) {
  return amazingAppAPI.put(`/api/v1/comedians/${payload.id}/`, payload.data)
}
function api_v1_comedians_partial_update(payload) {
  return amazingAppAPI.patch(`/api/v1/comedians/${payload.id}/`, payload.data)
}
function api_v1_comedians_delete(payload) {
  return amazingAppAPI.delete(`/api/v1/comedians/${payload.id}/`)
}
function api_v1_jokes_list(payload) {
  return amazingAppAPI.get(`/api/v1/jokes/`)
}
function api_v1_jokes_create(payload) {
  return amazingAppAPI.post(`/api/v1/jokes/`, payload.data)
}
function api_v1_jokes_read(payload) {
  return amazingAppAPI.get(`/api/v1/jokes/${payload.id}/`)
}
function api_v1_jokes_update(payload) {
  return amazingAppAPI.put(`/api/v1/jokes/${payload.id}/`, payload.data)
}
function api_v1_jokes_partial_update(payload) {
  return amazingAppAPI.patch(`/api/v1/jokes/${payload.id}/`, payload.data)
}
function api_v1_jokes_delete(payload) {
  return amazingAppAPI.delete(`/api/v1/jokes/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return amazingAppAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(payload) {
  return amazingAppAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_login_create(payload) {
  return amazingAppAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_list(payload) {
  return amazingAppAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return amazingAppAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return amazingAppAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return amazingAppAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return amazingAppAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return amazingAppAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return amazingAppAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_read(payload) {
  return amazingAppAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return amazingAppAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return amazingAppAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_v1_comedians_list,
  api_v1_comedians_create,
  api_v1_comedians_read,
  api_v1_comedians_update,
  api_v1_comedians_partial_update,
  api_v1_comedians_delete,
  api_v1_jokes_list,
  api_v1_jokes_create,
  api_v1_jokes_read,
  api_v1_jokes_update,
  api_v1_jokes_partial_update,
  api_v1_jokes_delete,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
