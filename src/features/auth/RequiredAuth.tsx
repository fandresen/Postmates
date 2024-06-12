import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function RequiredAuth() {
  const auth = useSelector<RootState>((state)=>state.auth.refreshToken)
  const location = useLocation()

  return auth !== ""? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
}
