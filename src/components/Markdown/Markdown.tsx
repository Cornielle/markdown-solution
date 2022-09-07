import { useState } from 'react'
import { MarkdownFormats } from './enums'
import './Markdown.css'

const Markdown = (): JSX.Element => {
   const [inputValue, setInputValue] = useState("")
   const [markdown, setMarkdown] = useState("")

   const renderMarkdown = (line: string): string => {
      switch (line.length > 0) {
        case line.startsWith(MarkdownFormats.headingTwo):
        return (
          `
            <h2>
              ${line.replace(MarkdownFormats.headingTwo, '')}
            </h2>
          `
        )
        case line.startsWith(MarkdownFormats.headingOne):
          return (
            `
              <h1>
                ${line.replace(MarkdownFormats.headingOne, '')}
              </h1>
            `
          )
        case line.startsWith(MarkdownFormats.horizontalRule):
          return (
            `
            <hr/>
            `
          )
        default:
          return (
            `
              ${line}
            `
          )
      }
  }


  const onFormatValue = (markdown: string) => {
    setInputValue(markdown)
    const markdownLines = markdown.split("\n")
    markdown.split("\n").forEach((line, i) => {
      renderMarkdown(line)
      markdownLines
        .splice(
          i,
          markdown.length,
          renderMarkdown(line)
        )
    })
    setMarkdown(markdownLines.join(""))
  }

  return (
    <div className='container'>
        
        {/*Input*/}
        <textarea
            className='input'
            onChange={
            (e)=> onFormatValue(
              e.target.value
            )}
          value={inputValue}
        >
        </textarea>

        {/*Output*/}
        <div className='output'>
          <p 
            className='output-text'
            dangerouslySetInnerHTML=
              {
                {__html: `<p>${markdown}</p>`}
              }
          >
          </p>
        </div>
    </div>
  )
}
export { Markdown}