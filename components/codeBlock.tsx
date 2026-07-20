import React from "react"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter"
import markup from "react-syntax-highlighter/dist/cjs/languages/prism/markup"
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript"
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json"
import sql from "react-syntax-highlighter/dist/cjs/languages/prism/sql"
import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript"
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx"
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx"
import yaml from "react-syntax-highlighter/dist/cjs/languages/prism/yaml"
import csharp from "react-syntax-highlighter/dist/cjs/languages/prism/csharp"
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash"
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css"
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

export { SUPPORTED_LANGUAGES } from "./supportedCodeLanguages"

SyntaxHighlighter.registerLanguage("markup", markup)
SyntaxHighlighter.registerLanguage("html", markup)
SyntaxHighlighter.registerLanguage("xml", markup)
SyntaxHighlighter.registerLanguage("javascript", javascript)
SyntaxHighlighter.registerLanguage("js", javascript)
SyntaxHighlighter.registerLanguage("json", json)
SyntaxHighlighter.registerLanguage("sql", sql)
SyntaxHighlighter.registerLanguage("typescript", typescript)
SyntaxHighlighter.registerLanguage("ts", typescript)
SyntaxHighlighter.registerLanguage("jsx", jsx)
SyntaxHighlighter.registerLanguage("tsx", tsx)
SyntaxHighlighter.registerLanguage("yaml", yaml)
SyntaxHighlighter.registerLanguage("csharp", csharp)
SyntaxHighlighter.registerLanguage("cs", csharp)
SyntaxHighlighter.registerLanguage("bash", bash)
SyntaxHighlighter.registerLanguage("shell", bash)
SyntaxHighlighter.registerLanguage("sh", bash)
SyntaxHighlighter.registerLanguage("css", css)

interface CodeBlockProps {
  language: string
  children: string
}

const CodeBlock = ({ language, children }: CodeBlockProps) => (
  <SyntaxHighlighter
    style={a11yDark as any}
    language={language}
    PreTag="div"
    className="blog-code-block"
  >
    {children}
  </SyntaxHighlighter>
)

export default CodeBlock
