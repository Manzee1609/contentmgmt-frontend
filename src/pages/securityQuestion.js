export default function securityQuestion() {
	const [question, setQuestion] = useState("");
	const [answer, setAns] = useState("");
	const navigate = useNavigate();

	const verify = () => {
		const data={};
		axios.post('', data)
			.then(res => {
				navigate("/"); })
		}

    return (
<div class="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
  <div class="w-full sm:max-w-md p-5 mx-auto">
    <h2 class="mb-12 text-center text-5xl font-extrabold">Two Factor Authentication</h2>
    <form>
      <div class="mb-4">
        <label class="block mb-1" for="email" value={question} onChange={e => setQuestion(e.target.value)}>Security question</label>
        <input id="email" type="text" name="email" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div class="mb-4">
        <label class="block mb-1" for="password" value={answer} onChange={e => setAns(e.target.value)}>Answer</label>
        <input id="password" type="text" name="password" class="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div class="mt-6 flex items-center justify-between">
      </div>
      <div class="mt-6">
        <button onClick={verify()} class="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Verify</button>
      </div>
    </form>
  </div>
</div>
    )
}