 import '@styles/globals.css'
 import Nav from '@components/Nav'
 import Provider from '@components/Provider'
 export const metadata = {
    title: "prompthub",
    description:"discover and share prompts"
 }
 const Layout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>
            <div className="main">
                <div className="gradient" />
            </div>
            <main className="app">
                <Nav/>
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default Layout