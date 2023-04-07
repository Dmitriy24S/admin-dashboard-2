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
import { PageHeader } from '../components'
import PageContentWrapper from '../components/Shared/PageContentWrapper'
import { EditorData } from '../data/dummyData'

const Editor = () => {
  return (
    <PageContentWrapper>
      <PageHeader category='App' title='Editor' />
      <RichTextEditorComponent
        style={{
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <EditorData />
        <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
      </RichTextEditorComponent>
    </PageContentWrapper>
  )
}

// export default React.memo(Editor)
export default Editor
