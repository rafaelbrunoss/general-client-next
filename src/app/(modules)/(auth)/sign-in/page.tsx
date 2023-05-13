import SignInBanner from './(sign-in-banner)/SignInBanner';
import SignInForm from './(sign-in-form)/SignInForm';

export default function SignIn() {
  return (
    <div className='w-full h-screen flex items-start'>
      <SignInBanner />
      <SignInForm />
    </div>
  );
}
