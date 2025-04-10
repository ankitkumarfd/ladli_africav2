export function TypographyH1({ children, className }) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-bold bg-gradient-to-br py-2 from-blue-300 to-blue-800 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }) {
  return (
    <h2
      className={`scroll-m-20 text-gray-800 pb-2 text-3xl font-bold uppercase ${className}`}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }) {
  return (
    <h3
      className={`scroll-m-20 text-pink-600 text-2xl font-semibold ${className}`}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }) {
  return (
    <h4
      className={`scroll-m-20 text-gray-800 text-xl font-semibold ${className}`}
    >
      {children}
    </h4>
  );
}

export function TypographyP({ children, className }) {
  return (
    <p className={`leading-6 text-gray-700 text-justify ${className}`}>
      {children}
    </p>
  );
}

export function TypographyBlockquote({ children }) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}
