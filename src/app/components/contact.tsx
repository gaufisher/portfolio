const Contact = () => {
    return (
      <section id="contact" className="py-12 bg-gray-50 text-center">
        <h2 className="text-4xl font-semibold mb-6 text-gray-900">Let&apos;s Connect</h2>
        <p className="mb-8 text-lg text-gray-700">I&apos;m always open to discussing new projects or opportunities. Feel free to reach out through LinkedIn!</p>
        <a
          href="https://www.linkedin.com/in/gfishermentor"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition-colors duration-300"
        >
          Connect on LinkedIn
        </a>
      </section>
    );
  };
  
  export default Contact;