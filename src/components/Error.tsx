import { FC, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const Error:FC = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>You got an error!</Alert.Heading>
        <p>
            Data not loaded
        </p>
      </Alert>
    );
  }
  return <Button variant="danger" onClick={() => setShow(true)}>Show Alert</Button>;
}

export default Error