import githubLogo from "../../assets/images/github_red.svg";

export function Header() {
  return (
    <header className="header">
        <a href="https://github.com/AndreasB09">
            <img className="githubRed" src={githubLogo} alt="GitHub Logo" />
        </a>
        <nav className="menu-items">
            <ul>Home</ul>
            <ul>Background</ul>
            <ul>Playstyle</ul>
        </nav>
    </header>
  );
}