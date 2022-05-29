export default function viewOneArticle(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return(
        <>
        <div class="mb-4">
        <label class="block mb-1"value={title} onChange={e => setTitle(e.target.value)}>Title</label>
        <input type="text" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
        <div class="w-full max-w-sm mx-auto">
        <textarea value={description} onChange={e => setDescription(e.target.value)} class="h-24 w-full border rounded-xl overflow-hidden resize-none focus:border-blue-500 ring-1 ring-transparent focus:ring-blue-500 focus:outline-none text-black p-2 transition ease-in-out duration-300" placeholder="Christ bless you! . . ."></textarea>
        <div class="flex justify-end">
          <button class="rounded-full py-1 px-2 text-white bg-black">Submit For Review</button>
        </div>
    </div>
        </>
    );
};