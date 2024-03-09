import type { NextPage } from "next";

const testCss: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <details className="select-none open:bg-indigo-600 open:text-white">
        <summary className="cursor-pointer">What is my fav. food.</summary>
        <span>김치</span>
      </details>

      <ul className="list-disc marker:text-teal-500">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>

      <input
        type="file"
        className="file:cursor-pointer file:rounded-xl file:border-0 file:bg-purple-400 file:px-5 file:text-white file:transition-colors file:hover:border-2 file:hover:border-purple-400 file:hover:bg-white file:hover:text-purple-400"
      />

      <p className="first-letter:text-7xl first-letter:hover:text-purple-400">
        lorem sdfasdfsdfasdfsdf
      </p>
    </div>
  );
};

export default testCss;
