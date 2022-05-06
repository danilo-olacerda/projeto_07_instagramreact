import Story from './Story';
import Post from './Post';

export default function Top() {

    const story = [{name: "9gag", image: "assets/img/9gag.svg"}, {name: "meowed", image: "assets/img/meowed.svg"}, {name: "barked", image:"assets/img/barked.svg"}, 
    {name: "nathanwpylestrangeplanet", image:"assets/img/nathanwpylestrangeplanet.svg"}, {name: "wawawicomics", image:"assets/img/wawawicomics.svg"}, 
    {name: "respondeai", image:"assets/img/respondeai.svg"}, {name: "filomoderna", image:"assets/img/filomoderna.svg"}, 
    {name: "memeriagourmet", image:"assets/img/memeriagourmet.svg"}];

    const post = [{name:"meowed", userImage:"assets/img/meowed.svg", image:"assets/img/gato-telefone.svg", likedImage:"assets/img/respondeai.svg", likedName:"respondeai", likedNumber:"101.523"}, 
    {name:"barked", userImage:"assets/img/barked.svg", image:"assets/img/dog.svg", likedImage:"assets/img/adorable_animals.svg", likedName:"adorable_animals", likedNumber:"99.159"}];

    return (
    <div class="esquerda">
        <div class="stories">
            {story.map(Story)}
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

        <div class="posts">
            
            {post.map(Post)}

        </div>
    </div>
    )
}