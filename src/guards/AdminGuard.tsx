import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import apiClient from "../api/ApiClient";

export const AdminGuard = ({children}: {children: JSX.Element}) => {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkAdmin = async () => {
      try {
        await apiClient.get("/admin/auth-check", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setAuthorized(true);
      } catch {
        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    };
    checkAdmin();
  }, []);
  if (loading) return <div>인증 확인 중...</div>;
  if (!authorized) return <Navigate to="/admin/login" replace />;
  return children;
};
