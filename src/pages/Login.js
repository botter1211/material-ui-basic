import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Stack from "@mui/material/Stack";

function Login() {
  let navigate = useNavigate();

  return (
    <Stack sx={{ p: 4, alignItems: "center" }}>
      <LoginForm
        callback={() => {
          navigate({ replace: true });
        }}
      />
    </Stack>
  );
}

export default Login;
