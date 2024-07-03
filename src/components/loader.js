import Typewriter from 'typewriter-effect';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin-slow"></div>
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold text-gray-700">
          Loading site...
        </p>
        <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600">
          <Typewriter
            options={{
              strings: [
                " When you have a dream, you've got to grab it and never let go.",
              ],
              autoStart: true,
              loop: false,
            }}
          />
        </h1>
      </div>
    </div>
  );
};

export default Loading;