import React, {useEffect} from 'react'

const test = () => {

    useEffect(() => {
        fetch(`https://lightning-yoga-api.herokuapp.com/yoga_poses`)
         .then((response) => console.log(response));
       }, []);

  return (
    <div>test</div>
  )
}

export default test