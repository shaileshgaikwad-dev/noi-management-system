export function logoutAdmin() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("lastLoginAt");
  localStorage.removeItem("email");
  localStorage.removeItem("name");
}
