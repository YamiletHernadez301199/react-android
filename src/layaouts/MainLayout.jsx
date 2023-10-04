import { Header } from "../components/Header/Header"

export const MainLayout = ({children}) => {
  return (
    <>
        <Header/>
        {children}
    </>
  )
}
