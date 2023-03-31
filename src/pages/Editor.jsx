import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from '@syncfusion/ej2-react-richtexteditor'

import { Header } from '../components'
import { EditorData } from '../data/dummyData'

const Editor = () => {
  return (
    <div className='m-10 mt-16 md:mt-10 p-10 bg-white rounded-3xl overflow-scroll'>
      <Header category='App' title='Editor' />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
      </RichTextEditorComponent>
    </div>
  )
}

export default Editor
