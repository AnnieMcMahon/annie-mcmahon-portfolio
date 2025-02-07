
export default function Footer() {
  return (
    <footer className="py-4 mt-auto bg-gray-100">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Annie McMahon. All rights reserved.</p>
        <div className="mt-4">
          <a
            href="https://github.com/anniemcmahon"
            className="mx-2 text-green-800 hover:text-green-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/anniemcmahon20"
            className="mx-2 text-green-800 hover:text-green-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:anniemcmahon20@gmail.com"
            className="mx-2 text-green-800 hover:text-green-500"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

