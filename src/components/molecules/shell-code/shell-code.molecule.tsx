import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark, lightfair } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import Button from '@/components/atoms/button/button.atom'
import { IShellCodeProps } from '@/components/molecules/shell-code/interface'
import { useThemeDetector } from '@/hooks/use-theme-detector.hook'
import { downloadTextFile } from '@/utils/general.util'

import CopyButton from '../copy-button/copy-button.molecule'

const ShellCode: React.FC<IShellCodeProps> = ({ code, language = 'bash', name }) => {
  const theme = useThemeDetector()

  const handleDownload = () => {
    downloadTextFile(code, name)
  }

  return (
    <div>
      <div className="flex items-center justify-center lg:justify-end mb-2">
        <CopyButton label="Copy" textToCopy={code} />
        <Button onClick={handleDownload} outline label="Download" />
      </div>
      <div
        style={{ whiteSpace: 'pre-wrap', overflow: 'auto', maxHeight: '500px' }}
        className="text-break"
      >
        <SyntaxHighlighter
          language={language}
          wrapLongLines
          style={theme === 'dark' ? dark : lightfair}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default ShellCode
