import './styles.css';
import {ReactComponent as YoutubeIcon} from './youtube.svg';
import {ReactComponent as InstagramIcon} from './instagram.svg';
import {ReactComponent as LinkedinIcon} from './linkedin.svg';

function Footer(){
    return(
        <footer className="main-footer">
            Workshop com API Rest no Spring Boot e React no front-end.

            <div className="footer-icons">
                <a href="#">
                    <YoutubeIcon/>
                </a>
                <a className="#">
                    <InstagramIcon/>
                </a>
                <a className="#">
                    <LinkedinIcon/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;