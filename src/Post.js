import React from "react";

export default function Post(props) {

    const [liked, setLiked] = React.useState("heart-outline");
    const [likedColor, setLikedColor] = React.useState("")

    function likeOnOff() {
        if (liked==="heart-outline") {
            setLiked("heart");
            setLikedColor("filled-heart")
        } else {
            setLiked("heart-outline");
            setLikedColor("")
        }
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImage} />
                    {props.name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img onClick={likeOnOff} src={props.image} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={liked} onClick={likeOnOff} class={likedColor}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.likedImage} />
                    <div class="texto">
                        Curtido por <strong>{props.likedName}</strong> e <strong>outras {props.likedNumber} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}