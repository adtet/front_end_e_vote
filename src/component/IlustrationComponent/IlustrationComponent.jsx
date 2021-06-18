import image from '../../assets/img/3d ilustrasi.svg';
import './IlustrationComponent.css';

function IlustrasiComponent() {
    return (
        <div className="ilustration text-center">
            <img src={image} alt="" />
        </div>
    )
}

export default IlustrasiComponent;