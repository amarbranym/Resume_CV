import { useSelector } from "react-redux";
import Cookies from "js-cookie";

export default function UserAuth() {
  const accessToken = Cookies.get("access_token");

  const { user } = useSelector((state: any) => state.auth);
  return !!accessToken;
}
