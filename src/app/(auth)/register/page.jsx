'use client';
import React from "react";
import { Formik, Form } from "formik";
import Input from "../../components/Input";
import "../../globals.css";
import Button from "../../components/Button";
import Link from "next/link";
import * as Yup from "yup";

export default function Register() {
  const initialValues = {
    email: "",
    password: "",
  };
  
  const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email("Digite um e-mail válido")
    .required("O campo é obrigatório"),
    password: Yup.string().required("O campo é obrigatório"),
    name: Yup.string().required("O nome tem que ser inserido"),
  });

  async function handleSubmit() {
    
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <Formik initialValues={initialValues} validationSchema={validationSchema} 
      onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form
            noValidate
            className="flex flex-col gap-2 rounded p-4 border border-zinc-300 min-w-[300px] bg-white"
          >
           <Input name="name" required />
            <Input name="email" type="email" required />
            <Input name="password" type="password" required autoComplete="off" />
            <Button
              type="submit"
              text="Entrar"
              className="bg-green-500 text-white rounded p-2 cursor-pointer"
            />
            <span className="text-xs text-zinc-500">
              Já tem uma conta?{" "}
              <strong className="text-zinc-700">
                <Link href="/login">Entre</Link>
              </strong>
            </span>
          </Form>
        )}
      </Formik>
    </main>
  );
}