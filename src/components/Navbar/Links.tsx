"use client";

export default function Links() {
  const links = [
    {
      name: "UEFA Euro",
      url: "/",
    },
    {
      name: "API ⌄",
      url: "/",
    },
    {
      name: "Docs",
      url: "/",
    },
    {
      name: "Pricing",
      url: "/",
    },
  ];

  return (
    <ul className="grow flex justify-center items-center gap-7">
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
