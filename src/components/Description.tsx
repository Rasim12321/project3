import { FC } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useTypedSelector } from '../hooks/useTypedSelector';

const Description: FC = () => {
    const {page, goods} = useTypedSelector(state => state.todos)

  return (
    <Accordion className='m-3' defaultActiveKey="0">
      <Accordion.Item eventKey="1">
        <Accordion.Header className='text-center'>Описание</Accordion.Header>
        <Accordion.Body>
            {goods[page].description}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Description;