export default function SideBarUser(props) {
    return (
        <div class="usuario">
            <img src={props.image} />
            <div class="texto">
                <strong>{props.name}</strong>
                {props.userName}
            </div>
        </div>
    )
}