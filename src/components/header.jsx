import '../styles/header.css';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

export default function Header() {
  return (
    <header className="header">
      <TextSnippetIcon style={{ fontSize: '5em', paddingTop: '0.2em' }} />
      <h1>CV Builder</h1>
    </header>
  );
}
