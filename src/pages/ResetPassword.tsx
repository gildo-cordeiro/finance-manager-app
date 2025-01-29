import { Alert, AlertTitle, Box, Button, CssBaseline, FormControl, FormLabel, Stack, styled, TextField, Typography } from "@mui/material";
import AppTheme from "../shared-theme/AppTheme";
import MuiCard from '@mui/material/Card';
import React from "react";
import ColorModeSelect from "../shared-theme/ColorModeSelect";
import { useSearchParams } from "react-router-dom";

const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow:
        'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow:
            'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));

const ResetPasswordContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));

export default function ResetPassword() {
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
    const [successMessage, setSuccessMessage] = React.useState<string | null>(null);
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [searchParams] = useSearchParams();

    const validateInputs = () => {
        const password = document.getElementById('password') as HTMLInputElement;
        let isValid = true;

        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        } else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }
        return isValid;
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const password = document.getElementById('password') as HTMLInputElement;
        const token = searchParams.get('token');

        if (!validateInputs()) {
            return;
        }

        if (!token) {
            setErrorMessage('Invalid token');
            return;
        }

        fetch('http://localhost:3000/auth/reset-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token,
                password: password.value,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    setErrorMessage(data.error);
                } else {
                    setSuccessMessage(data.message);
                }
            })
            .catch((error) => {
                setErrorMessage('An error occurred. Please try again later.');
            });
    }

    return (
        <AppTheme>
            <CssBaseline enableColorScheme />
            <ResetPasswordContainer direction="column" justifyContent="space-between">
                <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
                <Stack direction="column" gap={2}>
                    <Card variant="outlined">
                        <Typography
                            component="h3"
                            variant="h4"
                            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', textAlign: 'center' }}
                        >
                            Nova senha
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2,
                            }} >
                            {errorMessage && (
                                <Alert severity="error" sx={{ width: '100%', mt: 2 }}>
                                    <AlertTitle>Error</AlertTitle>
                                    {errorMessage}
                                </Alert>
                            )}
                            {successMessage && (
                                <Alert severity="success" sx={{ width: '100%', mt: 2 }}>
                                    <AlertTitle>Success</AlertTitle>
                                    {successMessage}
                                </Alert>
                            )}
                            <FormControl>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <TextField
                                    error={passwordError}
                                    helperText={passwordErrorMessage}
                                    name="password"
                                    placeholder="••••••"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    autoFocus
                                    required
                                    fullWidth
                                    variant="outlined"
                                    color={passwordError ? 'error' : 'primary'}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                onClick={validateInputs}
                            >
                                Enviar
                            </Button>
                        </Box>
                    </Card>
                </Stack>
            </ResetPasswordContainer>
        </AppTheme>
    )
}