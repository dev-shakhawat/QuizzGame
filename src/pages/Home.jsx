import { Link } from "react-router"

function Home() {

  return (
    <div  className="grid h-screen place-items-center  " >
      <div className="text-center lg:w-1/2 w-full px-10">
        <img src="/logo.png" alt="logo" className="w-[400px] mx-auto  " />
        <p className="">Welcome to the quizz. You will be presented with 500 questions. Per question you will have 4 options to choose from. The correct answer will be highlighted in green. The wrong answer will be highlighted in red. You will have 40 seconds to answer each question.</p>
        <Link to={"/game"}  className="btn px-20 text-xl mt-5 ">  Start Game </Link>
      </div>
    </div>
  )
}

export default Home
