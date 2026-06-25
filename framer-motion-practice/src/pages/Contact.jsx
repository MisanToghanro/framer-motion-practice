
function Contact() {
  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-5xl font-bold mb-6">
        Contact
      </h1>

      <p className="mb-8">
        This is a demo contact page for practicing animated forms.
      </p>

      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="border p-3 rounded w-full"
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded w-full"
        />

        <textarea
          placeholder="Message"
          rows="5"
          className="border p-3 rounded w-full"
        />

        <button className="bg-black text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>
    </main>
  );
}

export default Contact;