import './Purple.css';
import logo from './IMAGE.svg'

function Purple() {
    return (
        <div className="purple">
    <div className='pillar'>
        <div className='slogan'>We’re strategic</div>
        <div className='slogan highlight'>SEO Marketing</div>
        <div className='slogan'>agency.</div>
        <div className='spyro'>Spyro is a powerful landing pages builder WP theme that lets you build high converting landing pages using its specially crafted modules clubbed inside.</div>
        <button className='button'> Explore Now </button>
    </div>
    <img className='img' src={logo}></img>
</div>
    );
}

export default Purple;