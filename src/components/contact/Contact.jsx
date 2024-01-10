import { React, useState } from 'react';
import { Formik, Form } from 'formik';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { formInitialValues } from '/src/formik/initialValues';
import { validationSchema } from '/src/formik/validationSchema';

export const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  return (
    <div className='flex flex-col md:flex-row items-center justify-center bg-[#0d0d0d] h-full p-7 sm:py-28'>
      <div className='flex flex-col justify-center rounded-xl p-5 mt-12 w-full sm:w-[22em] text-white'>
        <p className='text-center text-xl mb-2'>¿Tenés alguna duda?</p>
        <p className='text-center'>
          ¡No dudes en consultarnos! Nuestros operadores están respondiendo
          mensajes desde las 9:00 hasta las 9:30
        </p>
      </div>
      <div className='flex justify-center rounded-xl p-10 bg-black mt-12 w-full sm:w-[22em]'>
        <Formik
          initialValues={formInitialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.table(values);
            setMessageSent(true);
            resetForm();
          }}
        >
          <Form className='flex flex-col gap-4 text-white'>
            <h1 className='text-xl text-center text-[#D9BD8B]'>Contacto</h1>
            <div className='flex w-full'>
              <FormInput
                className='rounded-l-lg outline-none bg-[#0d0d0d] placeholder:px-1 w-full p-2 sm:p-1'
                name='name'
                label='name'
                type='text'
                placeholder='Nombre'
              />
              <FormInput
                className='rounded-r-lg outline-none bg-[#0d0d0d] placeholder:px-1 w-full p-2 sm:p-1'
                name='surname'
                label='surname'
                type='text'
                placeholder='Apellido'
              />
            </div>
            <FormInput
              className='rounded-lg outline-none bg-[#0d0d0d] placeholder:px-1 w-full p-2 sm:p-1'
              name='companyName'
              label='companyName'
              type='text'
              placeholder='Nombre de empresa'
            />
            <FormInput
              className='rounded-lg outline-none bg-[#0d0d0d] placeholder:px-1 w-full p-2 sm:p-1'
              name='email'
              label='email'
              type='text'
              placeholder='Email de empresa'
            />
            <FormTextarea
              className='rounded-lg outline-none resize-none bg-[#0d0d0d] placeholder:px-1 w-full h-24 p-2 sm:p-1'
              name='message'
              label='message'
              type='text'
              placeholder='Mensaje'
            />
            <button
              className='border-none border-2 text-center w-full py-2 sm:py-1 rounded-xl bg-[#a6121f] text-white'
              type='submit'
            >
              {messageSent ? 'Mensaje enviado!' : 'Enviar'}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
