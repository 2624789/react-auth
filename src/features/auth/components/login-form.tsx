import React from "react";

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm, SubmitHandler } from "react-hook-form";

import { Copyright } from "../../ui";

interface LoginInputs {
  email: String;
  password: String;
}

const LoginForm: React.FC = () => {
  const {
    register, formState: { errors }, handleSubmit
  } = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = data => console.log(data);

  return (
    <Box
      sx={{
        padding: 8,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            type="email"
            autoComplete="email"
            autoFocus
            {...register("email", { required: true })}
            error={errors.email?.type === "required"}
            helperText={
              errors.email?.type === "required" ? "Email is required." : null
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password", { required: true })}
            error={errors.password?.type === "required"}
            helperText={
              errors.password?.type === "required" ? "Password is required." : null
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <Copyright />
    </Box>
  );
};

export { LoginForm };
