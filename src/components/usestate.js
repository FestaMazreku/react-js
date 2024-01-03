import { useState } from "react";

const useStateComponent = () => {
    const [name] = useState('hello');


return (
    <div className="home">
        <h2> Home </h2>
        <p> { name } </p>

    </div>
);
}

export default useStateComponent;