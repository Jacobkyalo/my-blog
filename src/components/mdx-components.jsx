import Image from "next/image";

export const components = {
  h1: (props) => <h1 className="text-3xl font-bold my-8" {...props} />,
  h2: (props) => (
    <h1 className="text-xl sm:text-2xl font-semibold my-6" {...props} />
  ),
  h3: (props) => <h1 className="text-xl font-semibold my-6" {...props} />,
  h4: (props) => <h1 className="text-lg font-semibold my-6" {...props} />,
  p: (props) => <p className="text-base my-6" {...props} />,
  ul: (props) => <ul className="list-disc ml-6 mb-6" {...props} />,
  ol: (props) => <ol className="list-decimal ml-6 mb-6" {...props} />,
  li: (props) => <li className="mb-2" {...props} />,
  a: (props) => (
    <a
      className="text-blue hover:text-blue-500 underline"
      target="_blank"
      {...props}
    />
  ),
  hr: (props) => <hr className="my-8" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-4 border-blue p-6 m-6 italic" {...props} />
  ),
  pre: (props) => (
    <pre
      className="bg-blue overflow-auto text-xs sm:text-sm w-full bg-opacity-20 rounded-xl p-4 my-8"
      {...props}
    />
  ),
  code: (props) => (
    <code className="text-darkWhite w-full rounded-sm p-1" {...props} />
  ),

  table: (props) => (
    <table
      className="my-40 block w-full border-collapse border border-blue"
      {...props}
    />
  ),
  thead: (props) => <thead className="border-b border-blue" {...props} />,
  th: (props) => <th className="text-start p-2" {...props} />,
  td: (props) => <td className="p-2" {...props} />,
  tr: (props) => <tr className="border-b border-blue" {...props} />,
  strong: (props) => <strong className="font-semibold" {...props} />,
  em: (props) => <em className="italic" {...props} />,
  del: (props) => <del className="line-through" {...props} />,
  img: (props) => <Image alt="image" className="my-8" {...props} />,
};
