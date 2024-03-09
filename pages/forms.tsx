import { FieldErrors, useForm } from 'react-hook-form';

interface LoginForm {
  username: string;
  password: string;
  email: string;
  errors?: string;
}
export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginForm>({ mode: 'onChange' });

  const onValid = (data: LoginForm) => {
    console.log(data);
    setError('errors', { message: 'Backend is offline sorry.' });
  };

  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('username', {
          required: 'Username is required',
          minLength: {
            message: 'The username should be longer than 5 chars.',
            value: 5,
          },
        })}
        type='text'
        placeholder='Username'
      />
      {errors.username?.message}
      <input
        {...register('email', {
          required: 'Email is required',
          validate: {
            notGmail: (value) => !value.includes('@gmail.com') || 'Gmail is not allowed',
          },
        })}
        type='email'
        placeholder='Email'
        className={`${Boolean(errors.email?.message) ? 'border-red-500' : ''}`}
      />
      {errors.email?.message}
      <input
        {...register('password', {
          required: 'Password is required',
        })}
        type='password'
        placeholder='Password'
      />
      <input type='submit' value='Create Account' />
    </form>
  );
}
