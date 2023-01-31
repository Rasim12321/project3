import { FC } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import '../styles/App.css'

const Loading: FC = () => {
  return (
    <div className='loading'>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;