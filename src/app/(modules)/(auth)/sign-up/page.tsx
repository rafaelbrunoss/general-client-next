import SignUpBanner from './(sign-up-banner)/SignUpBanner';
import SignUpForm from './(sign-up-form)/SignUpForm';

export default function SignUp() {
  return (
    <div className='w-full h-screen flex items-start'>
      <SignUpBanner />
      <SignUpForm />
    </div>
  );
}
