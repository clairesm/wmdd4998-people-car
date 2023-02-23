import { DeleteOutlined } from '@ant-design/icons';
import { useMutation } from '@apollo/client';
import { REMOVE_CAR } from '../../queries';

const RemoveCar = ({ id }) => {
  const [removeCar] = useMutation(REMOVE_CAR);
  const handleButtonClick = () => {
    let result = window.confirm(
      'Are you sure you want to delete this car?'
    );
    if (result) {
      removeCar({
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

export default RemoveCar;
