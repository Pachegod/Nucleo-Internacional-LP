// Roda antes da primeira pintura: resolve o tema salvo ou o do sistema
// e escreve data-theme no <html>, evitando o flash de tema errado.
const script = `(function(){try{
var s=localStorage.getItem("ni-theme");
var d=window.matchMedia("(prefers-color-scheme: dark)").matches;
var t=(s==="light"||s==="dark")?s:(d?"dark":"light");
document.documentElement.setAttribute("data-theme",t);
}catch(e){}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
