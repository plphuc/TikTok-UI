import SideBar from './SideBar';
import Header from '~/components/Layout/components/Header';

export default function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
