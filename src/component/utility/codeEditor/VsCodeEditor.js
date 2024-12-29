export const LANGUAGE_VERSION = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  javascript: "\nfunction greet(name) {\n  console.log(`Hello, ${name}!`);\n}",
  typescript:
    "\nfunction greet(name: string): void {\n  console.log(`Hello, ${name}!`);\n}",
  python: "\ndef greet(name):\n    print(f'Hello, {name}!')",
  java: "\npublic class Main {\n  public static void main(String[] args) {\n    System.out.println('Hello, World!');\n  }\n}",
  csharp:
    "\nusing System;\npublic class Program {\n  public static void Main() {\n    Console.WriteLine('Hello, World!');\n  }\n}",
  php: "\n<?php\nfunction greet($name) {\n  echo 'Hello, ' . $name . '!';\n}\ngreet('World');\n?>",
};
