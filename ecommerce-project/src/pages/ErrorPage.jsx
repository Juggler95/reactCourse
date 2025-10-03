import { Header } from "../components/header";

export function ErrorPage(){
  return(
    <>
      <Header />

      <div>
        <h1>Error 404</h1>
        <span>Page not found</span>
      </div>
    </>
  );
}
