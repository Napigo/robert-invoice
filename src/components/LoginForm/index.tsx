import { LoginSchema } from "@/form-schemas";
import { useSession } from "@/hooks/useSession";
import { Box, Button, FormControl } from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { FormEvent } from "react";
import { Form } from "../UIKIT";

interface LoginFormValues {
  username: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const { createSession } = useSession();
  const form = useFormik<LoginFormValues>({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (_: LoginFormValues) => {
      /**
       * @TODO
       */
    },
    validationSchema: LoginSchema,
  });
  return (
    <Box
      as="form"
      display="flex"
      flexDirection={"column"}
      gap={4}
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        form.handleSubmit();
        setTimeout(() => {
          createSession("svlavd8vda7v9");
        }, 3000);
      }}
    >
      <Form.TextField
        error={form.touched.username ? form.errors.username : undefined}
        placeholder="Username"
        autoComplete="off"
        spellCheck={false}
        value={form.values.username}
        onChange={form.handleChange("username")}
      />
      <Form.PasswordField
        placeholder="Password"
        error={form.touched.password ? form.errors.password : undefined}
        value={form.values.password}
        onChange={form.handleChange("password")}
      />

      <FormControl>
        <Button
          type="submit"
          isLoading={form.isSubmitting}
          width="100%"
          colorScheme={"brand"}
        >
          Login
        </Button>
      </FormControl>
    </Box>
  );
};
