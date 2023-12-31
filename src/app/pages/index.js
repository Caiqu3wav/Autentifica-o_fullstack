import RootLayout from '../path/to/RootLayout';
import Home from '../path/to/Home';
import Page from '../(auth)/login/page';
import Register from '../(auth)/register/page';
import "../../../src/app/globals.css";

export default function IndexPage() {
  return (
    <RootLayout>
      <Home />
      <Page />
      <Register/>
    </RootLayout>
  )
}