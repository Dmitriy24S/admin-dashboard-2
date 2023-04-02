import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor'
import React from 'react'
import { Header } from '../components'
import { EditorData } from '../data/dummyData'

const Editor = () => {
  return (
    <div
      className='m-10
mt-16 md:mt-10 p-4 md:p-10 bg-white rounded-3xl overflow-auto dark:bg-secondary-dark-bg'
    >
      <Header category='App' title='Editor' />
      <RichTextEditorComponent
        style={{
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <EditorData />
        <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
      </RichTextEditorComponent>
    </div>
  )
}

// export default React.memo(Editor)
export default Editor
