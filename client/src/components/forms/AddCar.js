import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import {
  Button,
  Divider,
  Form,
  Input,
  Select,
  Space,
} from 'antd';
import { Typography } from 'antd';
import { useMutation, useQuery } from '@apollo/client';
import {
  ADD_CAR,
  GET_CARS,
  GET_PEOPLE,
} from '../../queries';

const { Title } = Typography;
const { Option } = Select;

const getStyles = () => ({
  formItem: {
    flex: '0 1 auto',
  },
});

const AddCar = () => {
  const styles = getStyles();
  const [id, setId] = useState(uuidv4());
  const [addCar] = useMutation(ADD_CAR);

  const { loading, error, data } = useQuery(GET_PEOPLE);

  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  useEffect(() => {
    forceUpdate([]);
  }, []);

  const onFinish = (values) => {
    const { year, make, model, price, personId } = values;

    addCar({
      variables: {
        id,
        year,
        make,
        model,
        price,
        personId,
      },
      update: (cache, { data: { addCar } }) => {
        const data = cache.readQuery({ query: GET_CARS });
        cache.writeQuery({
          query: GET_CARS,
          data: {
            ...data,
            cars: [...data.cars, addCar],
          },
        });
      },
    });
    form.resetFields();
  };

  return (
    <div>
      <Divider>
        <Title level={4}>Add Car</Title>
      </Divider>
      <Form
        form={form}
        name='add-car-form'
        layout='inline'
        onFinish={onFinish}
        size='medium'
        style={{
          marginBottom: '40px',
          display: 'flex',
          gap: '10px',
          justifyContent: 'space-around',
          flexWrap: 'nowrap',
          alignItems: 'flex-end',
        }}
      >
        <Form.Item
          label='Year'
          name='year'
          rules={[
            {
              required: true,
              message: `Please input a year!`,
            },
          ]}
          style={styles.formItem}
        >
          <Input placeholder='Year' />
        </Form.Item>
        <Form.Item
          label='Make'
          name='make'
          rules={[
            {
              required: true,
              message: `Please input a car make!`,
            },
          ]}
          style={styles.formItem}
        >
          <Input placeholder='Make' />
        </Form.Item>
        <Form.Item
          label='Model'
          name='model'
          rules={[
            {
              required: true,
              message: `Please input a car model!`,
            },
          ]}
          style={styles.formItem}
        >
          <Input placeholder='Model' />
        </Form.Item>
        <Form.Item
          label='Price'
          name='price'
          rules={[
            {
              required: true,
              message: `Please input the car's price!`,
            },
          ]}
          style={styles.formItem}
        >
          <Input
            placeholder='Price'
            // defaultValue='$'
          />
        </Form.Item>
        <Form.Item
          name='personId'
          label='Person'
          rules={[{ required: true }]}
          style={styles.formItem}
        >
          <Select placeholder='Select a person...'>
            {loading ? (
              <Option value='' disabled>
                Loading...
              </Option>
            ) : error ? (
              <Option value='' disabled>
                Error loading data
              </Option>
            ) : (
              data.people.map((person) => (
                <Option key={person.id} value={person.id}>
                  {`${person.firstName} ${person.lastName}`}
                </Option>
              ))
            )}
          </Select>
        </Form.Item>
        <Form.Item shouldUpdate={true}>
          {() => (
            <Button
              type='primary'
              htmlType='submit'
              disabled={
                !form.isFieldsTouched(true) ||
                form
                  .getFieldError()
                  .filter(({ errors }) => errors.length)
                  .length
              }
              style={styles.formItem}
            >
              Add Car
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCar;
