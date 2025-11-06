// Authentication utility for admin routes
export const checkAdminAuth = () => {
  if (typeof window === 'undefined') return false;
  
  const sessionToken = localStorage.getItem('admin_session');
  if (!sessionToken) return false;
  
  try {
    // Basic token validation (you could make this more robust)
    const tokenParts = sessionToken.split('.');
    if (tokenParts.length !== 3) return false;
    
    // Decode payload to check expiration
    const payload = JSON.parse(atob(tokenParts[1]));
    const currentTime = Math.floor(Date.now() / 1000);
    
    if (payload.exp && payload.exp < currentTime) {
      // Token expired, remove it
      localStorage.removeItem('admin_session');
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Token validation error:', error);
    localStorage.removeItem('admin_session');
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem('admin_session');
  window.location.href = '/admin/login';
};

export const getAuthHeader = () => {
  const token = localStorage.getItem('admin_session');
  return token ? `Bearer ${token}` : null;
};