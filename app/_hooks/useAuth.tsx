import { useContext } from "react";

import { AuthContext } from "../_contexts/AuthContext";

export const useAuth = () => useContext(AuthContext);
