import { redirect } from 'next/navigation';

export default async function Home() {
  const isAuthenticated = false;

  if (isAuthenticated) {
    redirect('/home');
  } else {
    redirect('/sign-in');
  }
}
