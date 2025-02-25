export default function Footer() {
  return (
    <footer className="py-4">
      <div className="text-center">
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/anniemcmahon20/"
            className="text-teal-800 hover:underline"
            target="_blank"
          >
            www.linkedin.com/in/anniemcmahon20
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/AnnieMcMahon"
            className="text-teal-800 hover:underline"
            target="_blank"
          >
            github.com/AnnieMcMahon
          </a>
        </p>
        <p>
          &copy; {new Date().getFullYear()} Annie McMahon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
