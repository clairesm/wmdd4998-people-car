import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@apollo/client';
import { REMOVE_PERSON } from '../../queries';

const RemovePerson = ({ id }) => {
  const [removePerson] = useMutation(REMOVE_PERSON);
  const handleButtonClick = () => {
    let result = window.confirm(
      'Are you sure you want to delete this person?'
    );

    if (result) {
      removePerson({
        variables: {
          id,
        },
      });
    }
  };
  return (
    <DeleteOutlined
      key='delete'
      style={{ color: 'red' }}
      onClick={handleButtonClick}
    />
  );
};

export default RemovePerson;
