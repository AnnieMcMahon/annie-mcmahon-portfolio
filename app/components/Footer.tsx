export default function Footer() {
  return (
    <footer className="py-4">
      <div className="flex flex-row flex-wrap justify-center px-auto gap-x-4 pb-4">
        <div>
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
        </div>
        <div>
        <p>
          Slack:{" "}
          <a
            href="https://amwebstudio.slack.com"
            className="text-teal-800 hover:underline"
            target="_blank"
          >
            amwebstudio.slack.com
          </a>
        </p>
        <p>E-mail: <a
            href="mailto:annie@amwebstudio.net"
            className="text-teal-800 hover:underline"
            target="_blank"
          >
            Send me an e-mail
          </a></p>
      </div>
      </div>
        <p className="text-center">
          &copy; {new Date().getFullYear()} Annie McMahon. All rights reserved.
        </p>
    </footer>
  );
}
