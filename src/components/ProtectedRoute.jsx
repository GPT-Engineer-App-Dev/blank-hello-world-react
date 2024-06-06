import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { SupabaseAuthContext } from '../integrations/supabase/SupabaseAuthProvider.jsx';

const ProtectedRoute = ({ children }) => {
  const { session } = useContext(SupabaseAuthContext);

  if (!session) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;