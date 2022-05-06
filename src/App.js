import Top from './Top';
import Content from './Content';
import Sidebar from './Sidebar';
import Bottom from './Bottom';

export default function App() {
    return (
        <div>
            <Top />
            <div class="corpo">
                <Content />
                <Sidebar />
            </div>
            <Bottom />
        </div>
    )
}