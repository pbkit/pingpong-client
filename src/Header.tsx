import "./header.css";

const Header = () => {
  return (
    <div id="header">
      <h1>@pbkit/pingpong-client playground</h1>
      <p>
        <span>
          <a
            class="link"
            href="https://github.com/pbkit/pingpong-client"
            target="_blank"
            rel="noopener noreferrer"
          >
            @pbkit/pingpong-client
          </a>
          &nbsp;
          <a
            class="link"
            href="https://github.com/pbkit/pingpong-server"
            target="_blank"
            rel="noopener noreferrer"
          >
            @pbkit/pingpong-server
          </a>
          &nbsp;
          <a
            class="link"
            href="https://preactjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            built w/ Preact 💖
          </a>
        </span>
      </p>
      <p>
        Should serve pingpong-server with port 8080!
      </p>
    </div>
  )
}

export default Header;