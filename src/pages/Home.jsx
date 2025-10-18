import { Link } from "react-router"
function Home() {
  return (
    <>
      <section className="grow flex justify-center items-center bg-gray-100 lg:justify-start">
        <div className="text-center p-8 lg:text-left lg:p-16">
          <h1 className="text-3xl font-bold lg:text-5xl">Welcome to Our Fashion Shop</h1>
          <p className="text-lg my-6 lg:text-xl">This is a simple landing page built with React, Typescript, and Tailwind CSS.</p>
          <Link to="/shop" className="bg-blue-400 mt-20 text-white py-3 px-6 rounded-md hover:bg-blue-500">Get Started</Link>
        </div>
      </section>
    </>
  )
}

export default Home