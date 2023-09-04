const Newsletter = () => {
  return (
    <section className={`py-16 bg-jacarta text-white`}>
      <div className="container">
        <div
          className={`flex flex-col sm:flex-row sm:justify-between items-center max-w-3xl mx-auto space-y-5 sm:space-y-0 sm:space-x-3`}
        >
          <h2 className={`font-semibold text-2xl text-center sm:text-start`}>
            Subscribe our newsletter <br /> for newest books updates
          </h2>
          <div className="join">
            <input
              type="email"
              placeholder="Type your email here"
              name="email"
              className={`join-item input input-sm bg-transparent text-white border-yellow-indian rounded-l focus:outline-0`}
            />
            <button
              type="button"
              className={`join-item btn btn-sm bg-yellow-indian text-white text-xs !border-yellow-indian hover:bg-transparent border-l-0 rounded-r`}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
