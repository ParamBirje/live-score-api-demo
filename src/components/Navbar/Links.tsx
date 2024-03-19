"use client";

export default function Links() {
  const links = [
    {
      name: "UEFA Euro",
      url: "/",
    },
    {
      name: "API ⌄",
      url: "/jobs",
    },
    {
      name: "Docs",
      url: "/blog",
    },
    {
      name: "Pricing",
      url: "/blog",
    },
  ];

  return (
    <ul className="grow flex justify-center items-center gap-5">
      {links.map((link, index) => {
        return (
          <li key={index}>
            <a
              className={`
               hover:text-accentOrange`}
              href={link.url}
            >
              {link.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
