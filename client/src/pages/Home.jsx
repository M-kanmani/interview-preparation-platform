import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <center>
    <MainLayout>
      <section className="max-w-7xl mx-auto px-6 py-16 h-screen w-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-gray-800 hover:text-blue-600 transition duration-300 ">
          Welcome to Interview Preparation Platform
        </h1>
<br></br>
        <p className="mt-4 text-gray-600 text-lg">
          Prepare for coding interviews, aptitude tests, mock interviews, and track your progress in one place.
        </p>
      </section>
    </MainLayout>
    </center>
  );
}

export default Home;