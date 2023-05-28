import React from 'react'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import TextAlign from '@tiptap/extension-text-align'
import './Form.css'
import {BsCodeSlash, BsCodeSquare, BsTextParagraph, BsTypeBold, BsTypeItalic, BsTypeStrikethrough} from 'react-icons/bs'
import {MdClearAll, MdFormatAlignCenter, MdFormatAlignJustify, MdFormatAlignLeft, MdFormatAlignRight, MdFormatListBulleted, MdFormatListNumbered, MdFormatQuote, MdHorizontalDistribute, MdOutlineFormatClear} from 'react-icons/md'
import {TbHeading} from 'react-icons/tb'
import {AiOutlineEnter, AiOutlineRedo, AiOutlineUndo} from 'react-icons/ai'

const MenuBar = ({ editor }) => {
    if (!editor) {
      return null
    }
  
    return (
      <>
      <div className='flex gap-x-5 justify-center ml-10 mr-10 border-[1px] border-[414141] px-2 py-3 shadow-sm'>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <BsTypeBold 
          className='my-2 mx-1 text-lg'></BsTypeBold>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <BsTypeItalic 
          className='my-2 mx-1 text-lg'></BsTypeItalic>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          <BsTypeStrikethrough
          className='my-2 mx-1 text-lg'></BsTypeStrikethrough>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleCode()
              .run()
          }
          className={editor.isActive('code') ? 'is-active' : ''}
        >
          <BsCodeSlash
          className='my-2 mx-1 text-lg'></BsCodeSlash>
        </button>
        <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          <MdOutlineFormatClear
          className='my-2 mx-1 text-lg'></MdOutlineFormatClear>
        </button>
        <button onClick={() => editor.chain().focus().clearNodes().run()}>
          <MdClearAll
          className='my-2 mx-1 text-lg'></MdClearAll>
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >
          <BsTextParagraph
          className='my-2 mx-1 text-lg'></BsTextParagraph>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          <TbHeading
          className='my-2 mx-1 text-lg'></TbHeading>
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
        >
          <MdFormatAlignLeft
          className='my-2 mx-1 text-lg'></MdFormatAlignLeft>
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
        >
          <MdFormatAlignCenter
          className='my-2 mx-1 text-lg'></MdFormatAlignCenter>
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
        >
          <MdFormatAlignRight 
          className='my-2 mx-1 text-lg'></MdFormatAlignRight>
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
        >
          <MdFormatAlignJustify 
          className='my-2 mx-1 text-lg'></MdFormatAlignJustify>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <MdFormatListBulleted
          className='my-2 mx-1 text-lg'></MdFormatListBulleted>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <MdFormatListNumbered
          className='my-2 mx-1 text-lg'></MdFormatListNumbered>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}
        >
          <BsCodeSquare
          className='my-2 mx-1 text-lg'></BsCodeSquare>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          <MdFormatQuote
          className='my-2 mx-1 text-lg'></MdFormatQuote>
        </button>
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <MdHorizontalDistribute
          className='my-2 mx-1 text-lg'></MdHorizontalDistribute>
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()}>
          <AiOutlineEnter
          className='my-2 mx-1 text-lg'></AiOutlineEnter>
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
        >
          <AiOutlineUndo
          className='my-2 mx-1 text-lg'></AiOutlineUndo>
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
        >
          <AiOutlineRedo
          className='my-2 mx-1 text-lg'></AiOutlineRedo>
        </button>
        </div>
      </>
    )
  }
  
  export default function Form() {
    const editor = useEditor({
      extensions: [
        TextStyle.configure({ types: [ListItem.name] }),
        StarterKit.configure({
          bulletList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
          },
          orderedList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
          },
        }),
        BulletList.configure({
            HTMLAttributes:{
                class: 'list-disc'
            }
        }),
        OrderedList.configure({
            HTMLAttributes:{
                class:'list-decimal'
            }
        }),
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        })
      ],
      content: `
      `,
    })
  
    return (
      <div>
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    )
  }










// import React, { useState, useRef } from "react";
// import { BsTypeBold } from "react-icons/bs";
// import { BsTypeItalic } from "react-icons/bs";
// import { BsTypeUnderline } from "react-icons/bs";
// import { MdFormatListBulleted } from "react-icons/md";
// import { MdFormatListNumbered } from "react-icons/md";
// import { MdFormatIndentIncrease } from "react-icons/md";
// import { MdFormatColorFill } from "react-icons/md";
// import { MdFormatClear } from "react-icons/md";
// import { MdOutlineImage } from "react-icons/md";
// import { MdAddLink } from "react-icons/md";

// function Form({ mx = "mx-10", width = "" }) {
//   const [isi, setIsi] = useState("");

//   const handleIsiChange = (event) => {
//     setIsi(event.target.value);
//   };
//   return (
//     <div className={`border-[0.3px] shadow-md ${mx} mt-3 ${width}`}>
//       <div className="flex bg-tosca border-[0.3px] shadow-md py-1">
//         <div className="mx-2 text-lg bg-white w-fit">
//           <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
//             <BsTypeBold></BsTypeBold>
//           </button>
//           <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
//             <BsTypeItalic></BsTypeItalic>
//           </button>
//           <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
//             <BsTypeUnderline></BsTypeUnderline>
//           </button>
//         </div>

//         <div className="mx-2 text-lg bg-white w-fit">
//           <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
//             <MdFormatListBulleted></MdFormatListBulleted>
//           </button>
//           <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
//             <MdFormatListNumbered></MdFormatListNumbered>
//           </button>
//           <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
//             <MdFormatIndentIncrease></MdFormatIndentIncrease>
//           </button>
//         </div>

//         <div className="mx-2 text-lg bg-white w-fit">
//           <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
//             <MdFormatColorFill></MdFormatColorFill>
//           </button>
//           <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
//             <MdFormatClear></MdFormatClear>
//           </button>
//         </div>

//         <div className="mx-2 text-lg bg-white w-fit">
//           <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
//             <MdOutlineImage></MdOutlineImage>
//           </button>
//           <button className="p-1 mx-0.5 border-r-[2px] border-r-slate-500">
//             <MdAddLink></MdAddLink>
//           </button>
//         </div>
//       </div>
//       <div>
//         <form>
//           <textarea
//             type="text"
//             className="py-1 px-2 w-[100%] focus:outline-none focus:ring-1"
//             id="isi"
//             value={isi}
//             onChange={handleIsiChange}
//             style={{
//               minHeight: "20px",
//               maxHeight: "200px",
//               height: "auto",
//               resize: "vertical",
//             }}
//             rows={Math.min(20, isi.split("\n").length)}
//           />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Form;
