import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the Radiohead artist page
  redirect('/artist/12345');
}
