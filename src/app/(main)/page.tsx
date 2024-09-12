import PostEditor from "@/components/posts/editor/PostEditor";

export default function page() {
  return (
    <main className="h-[200vh] w-full bg-red-50">
      <div className="w-full">
        <PostEditor></PostEditor>
      </div>
    </main>
  );
}
