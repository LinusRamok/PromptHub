import "@styles/globals.css"
import Feed from "@components/feed"
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover & Share
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center"> AI-powered Prompts</span>
        </h1>
        <p className="desc text-center">
            Prompthub is an open source prompting tool for creating discovering and sharing AI prompts
        </p>
        <Feed/>
    </section>
  )
}

export default Home