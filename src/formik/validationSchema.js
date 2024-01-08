import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .matches(/^[a-zA-Z ]*$/, 'Nombre inválido')
    .max(15, 'Máximo 15 caracteres')
    .required('Campo requerido'),
  surname: Yup.string()
    .trim()
    .matches(/^[a-zA-Z ]*$/, 'Apellido inválido')
    .required('Campo requerido'),
  companyName: Yup.string().trim().max(20, 'Máximo 20 caracteres'),
  email: Yup.string().email('Email inválido').required('Campo requerido'),
  message: Yup.string().trim().required('Campo requerido'),
});
