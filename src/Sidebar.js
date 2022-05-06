import Suggestion from './Suggestion';
import SideBarUser from './SideBarUser';

export default function Sidebar() {

    const suggestion = [
    {name:"bad.vibes.memes", image:"assets/img/bad.vibes.memes.svg", reason:"Segue você"}, 
    {name:"chibirdart", image:"assets/img/chibirdart.svg", reason:"Segue você"}, 
    {name:"razoesparaacreditar", image:"assets/img/razoesparaacreditar.svg", reason:"Novo no Instagram"}, 
    {name:"adorable_animals", image:"assets/img/adorable_animals.svg", reason:"Segue você"}, 
    {name:"smallcutecats", image:"assets/img/smallcutecats.svg", reason:"Segue você"}];

    const user = {name:"catanacomics", image:"assets/img/catanacomics.svg", userName:"Catana"};

    return (
    <div class="sidebar">

        {SideBarUser(user)}

        <div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          {suggestion.map(Suggestion)}

        </div>

        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
    </div>
    )
}