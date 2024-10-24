import NavBar from "./navBar";

export default function MainLayout({children}){



  return (
    <div id="mainLayout">
      <NavBar />
      <main>
      {children}
      </main>
    </div>
  )
}