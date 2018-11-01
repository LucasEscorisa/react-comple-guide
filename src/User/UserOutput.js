import React from 'react';
import './User.css';

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>{props.userName}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at porttitor odio, in volutpat massa. Ut in mauris sit amet mi fermentum lobortis. Curabitur gravida lorem et lectus ornare, id porta magna mattis. Integer ac urna neque. Donec vehicula molestie velit, vel suscipit urna gravida ut. Aenean auctor ultrices turpis, vitae rutrum nunc scelerisque ut. Curabitur sit amet lacinia tortor. Donec non ante id leo faucibus feugiat eget et ex. Donec placerat ultrices congue. Ut aliquet nunc in ligula convallis, sit amet luctus lacus luctus. Praesent a cursus eros.</p>
            <p>Quisque varius ultrices condimentum. Curabitur lacinia dapibus lectus, eget rutrum nisi mattis sit amet. Aenean ac facilisis tortor, eget elementum turpis. Ut justo dui, lobortis sed sem eu, euismod hendrerit mauris. Vivamus quis est odio. Sed tristique sem vel iaculis condimentum. Nullam blandit libero eget tellus consequat fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce a finibus ante.</p>
        </div>
    )
}

export default userOutput;