import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the interactive map page
  redirect('/harta-interactiva');

  return null; // Return null as the page will redirect
}
