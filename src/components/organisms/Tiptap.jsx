"use client"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import ListItem from "@tiptap/extension-list-item"
import BulletList from "@tiptap/extension-bullet-list"
import OrderedList from "@tiptap/extension-ordered-list"

const Tiptap = () => {
	const editor = useEditor({
		extensions: [StarterKit, ListItem, BulletList, OrderedList],
		content: "<p>Hello World! 🌎️</p>",
	})
	return <EditorContent editor={editor} />
}
export default Tiptap
